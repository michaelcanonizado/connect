package com.michaelcanonizado.handlers;

import com.michaelcanonizado.utils.HttpMethod;
import com.michaelcanonizado.utils.HttpRequestHelper;
import com.michaelcanonizado.utils.TokenProvider;
import com.michaelcanonizado.utils.UserHelper;
import org.keycloak.events.Event;
import org.keycloak.events.admin.AdminEvent;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.models.UserModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class handleUserDelete implements Handler{
    private final Logger logger = LoggerFactory.getLogger(handleUserDelete.class);


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
