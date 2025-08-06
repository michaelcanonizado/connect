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
    private final String tokenUri;
    private final String clientId;
    private final String clientSecret;

    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    private String accessToken;
    private Instant expiresAt;

    /* Lock to ensure thread-safe access when multiple threads request a token */
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

        this.httpClient = HttpClient.newHttpClient();
        this.objectMapper = new ObjectMapper();
    }

    public String getAccessToken() {
        logger.info("GETTING ACCESS TOKEN...");
        /* If a valid token exists, return immediately  */
        if (accessToken != null && Instant.now().isBefore(expiresAt)) {
            return accessToken;
        }

        /* Prevent race conditions across threads */
        lock.lock();
        try {
            /* If no token exists or it has expired, fetch a new one */
            if (accessToken == null || Instant.now().isAfter(expiresAt)) {
                logger.info("NO ACCESS TOKEN AVAILABLE. FETCHING NEW ONE...");
                fetchNewToken();
            }
            return accessToken;
        } finally {
            ZonedDateTime zdt = expiresAt.atZone(ZoneId.systemDefault());
            String formattedDate = zdt.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
            logger.info("SUCCESSFULLY FETCHED TOKEN. EXPIRES IN: " + formattedDate);

            lock.unlock();
        }
    }

    /* Internal method to fetch a new token using Client Credentials flow */
    private void fetchNewToken() {
        try {
            /* Build required body for an authorized request */
            String body = "grant_type=client_credentials" +
                    "&client_id=" + clientId +
                    "&client_secret=" + clientSecret;

            /* Build the POST request to the token endpoint */
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(tokenUri))
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .POST(HttpRequest.BodyPublishers.ofString(body))
                    .build();

            /* Send request */
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() != 200) {
                throw new RuntimeException("Failed to fetch token. Error code: " + response.statusCode() + " Body: " + response.body());
            }

            /* Parse the response body */
            Map<String, Object> json = objectMapper.readValue(response.body(), Map.class);

            logger.info("TOKEN RESPONSE:");
            json.forEach((key, value) -> {
                logger.info(key + ": " + value);
            });

            /* Cache access token and expiry time */
            int expiresIn = (int) json.get("expires_in");
            this.expiresAt = Instant.now().plusSeconds(expiresIn - 30);
            this.accessToken = (String) json.get("access_token");

        } catch (Exception e) {
            throw new RuntimeException("Error fetching access token", e);
        }
    }
}
