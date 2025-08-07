package com.michaelcanonizado;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.net.ssl.SSLSession;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpHeaders;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Optional;

public class HttpRequestHelper {
    private static final Logger logger = LoggerFactory.getLogger(CustomEventListenerProvider.class);
    private static final ObjectMapper objectMapper = new ObjectMapper();
    private static final HttpClient httpClient = HttpClient.newHttpClient();

    public static HttpResponse<String> sendRequest(String uri, String token, HttpMethod method,Object body) {
        try {
            String jsonBody = objectMapper.writeValueAsString(body);

            HttpRequest.Builder builder = HttpRequest.newBuilder()
                    .uri(URI.create(uri))
                    .header("Authorization", "Bearer " + token)
                    .header("Content-Type", "application/json");

            switch(method) {
                case POST:
                    builder.POST(HttpRequest.BodyPublishers.ofString(jsonBody));
                    break;
                default:
                    /* For any other HTTP method */
                    throw new Exception("Unhandled HttpRequestHelper Method!");
            }

            HttpRequest request = builder.build();
            return httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        } catch (IOException | InterruptedException e) {
            logger.error("ERROR SENDING REQUEST", e);
        } catch (Exception e) {
            logger.error("Error! ", e);
        }

        /* Fallback response to satisfy IDE. Don't return null
           so we no longer have to catch it on function use.*/
        return new HttpResponse<String>() {
            @Override
            public int statusCode() {
                return -1;
            }

            @Override
            public HttpRequest request() {
                return null;
            }

            @Override
            public Optional<HttpResponse<String>> previousResponse() {
                return Optional.empty();
            }

            @Override
            public HttpHeaders headers() {
                return null;
            }

            @Override
            public String body() {
                return "This is a fallback response. Something went wrong!";
            }

            @Override
            public Optional<SSLSession> sslSession() {
                return Optional.empty();
            }

            @Override
            public URI uri() {
                return null;
            }

            @Override
            public HttpClient.Version version() {
                return null;
            }
        };
    }
}
