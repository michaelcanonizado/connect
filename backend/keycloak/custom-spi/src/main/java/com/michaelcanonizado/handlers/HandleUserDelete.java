package com.michaelcanonizado.handlers;

import com.michaelcanonizado.utils.HttpMethod;
import com.michaelcanonizado.utils.HttpRequestHelper;
import com.michaelcanonizado.utils.TokenProvider;
import org.keycloak.events.Event;
import org.keycloak.events.admin.AdminEvent;
import org.keycloak.models.KeycloakSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.http.HttpResponse;

public class HandleUserDelete implements Handler{
    private final Logger logger = LoggerFactory.getLogger(HandleUserDelete.class);


    @Override
    public void handle(TokenProvider tokenProvider, KeycloakSession session, Event event) {
        logger.warn("NO HANDLER FOR USER DELETE (NON-ADMIN)");
    }

    @Override
    public void handle(TokenProvider tokenProvider, KeycloakSession session, AdminEvent event) {
        String resourcePath = event.getResourcePath();
        String userId = resourcePath != null && resourcePath.startsWith("users/") ?
                resourcePath.substring("users/".length()) : "";


        String uri = System.getenv("USER_SERVICE_URI");
        String uriWithId = uri + "/auth/" + userId;
        HttpResponse response =  HttpRequestHelper.sendRequest(uriWithId, tokenProvider.getAccessToken(), HttpMethod.DELETE, null);

        logger.info("DELETEing to " + uriWithId + " complete...");
        logger.info("Response Status Code: " + response.statusCode());
        logger.info("Response Body: " + response.body());
    }
}
