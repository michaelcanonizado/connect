package com.michaelcanonizado;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;
import java.util.concurrent.locks.ReentrantLock;

public class TokenProvider {
    // Required values for the token request
    private final String tokenUri;
    private final String clientId;
    private final String clientSecret;

    // Reusable HTTP client and JSON parser
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    // Cached token and expiry time
    private String accessToken;
    private Instant expiresAt;

    // Lock to ensure thread-safe access when multiple threads request a token
    private final ReentrantLock lock = new ReentrantLock();

    private Logger logger = LoggerFactory.getLogger(CustomEventListenerProvider.class);

    public TokenProvider(String tokenUri, String clientId, String clientSecret) {
        logger.info("CONSTRUCTING TOKEN PROVIDER...");
        this.tokenUri = tokenUri;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        logger.info("Token URI: "+tokenUri);
        logger.info("Client ID: "+clientId);
        logger.info("Client Secret: "+clientSecret);
        logger.info("Access Token: "+accessToken);
        logger.info("Access Token Expiry: "+expiresAt);

        this.httpClient = HttpClient.newHttpClient();
        this.objectMapper = new ObjectMapper();
    }

    // Public method to get a valid token (cached or freshly fetched)
    public String getAccessToken() {
        logger.info("GETTING ACCESS TOKEN");
        lock.lock(); // prevent race conditions across threads
        try {
            // If no token exists or it has expired, fetch a new one
            if (accessToken == null || Instant.now().isAfter(expiresAt)) {
                logger.info("NO ACCESS TOKEN AVAILABLE. FETCHING NEW ONE...");
                fetchNewToken();
            }
            return accessToken;
        } finally {
            ZonedDateTime zdt = expiresAt.atZone(ZoneId.systemDefault());
            String formattedDate = zdt.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
            logger.info("SUCCESSFULLY FETCHED TOKEN. EXPIRES IN: "+formattedDate);
            lock.unlock();
        }
    }

    // Internal method to fetch a new token using Client Credentials flow
    private void fetchNewToken() {
        try {
            // Prepare the body of the request in form-urlencoded format
            String body = "grant_type=client_credentials" +
                    "&client_id=" + clientId +
                    "&client_secret=" + clientSecret;
            // Build the POST request to the token endpoint
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(tokenUri))
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .POST(HttpRequest.BodyPublishers.ofString(body))
                    .build();

            // Send the request and receive the response synchronously
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            // If we don't get a 200 OK, throw an error
            if (response.statusCode() != 200) {
                throw new RuntimeException("Failed to fetch token. Error code: " + response.statusCode() + " Body: " + response.body());
            }

            // Parse the JSON response body
            Map<String, Object> json = objectMapper.readValue(response.body(), Map.class);

            logger.info("TOKEN RESPONSE:");
            json.forEach((key, value) -> {
                logger.info(key + ": " + value);
            });

            // Extract the access token and expiry time
            this.accessToken = (String) json.get("access_token");
            int expiresIn = (int) json.get("expires_in");

            // Set the expiry time slightly earlier (buffer of 30s)
            this.expiresAt = Instant.now().plusSeconds(expiresIn - 30);
        } catch (Exception e) {
            throw new RuntimeException("Error fetching access token", e);
        }
    }
}
