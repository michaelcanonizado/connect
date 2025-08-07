package com.michaelcanonizado.handlers;

import com.michaelcanonizado.CustomEventListenerProvider;
import com.michaelcanonizado.utils.HttpMethod;
import com.michaelcanonizado.utils.HttpRequestHelper;
import com.michaelcanonizado.utils.TokenProvider;
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

public class handleUserRegister implements Handler{
    private final Logger logger = LoggerFactory.getLogger(CustomEventListenerProvider.class);

    @Override
    public void handle(TokenProvider tokenProvider, KeycloakSession session, Event event) {
        String userId = event.getUserId();
        RealmModel realm = session.realms().getRealm(event.getRealmId());
        UserModel userModel = session.users().getUserById(realm, userId);

        if (userModel == null) {
            logger.warn("User not found for ID: " + userId);
            return;
        }

        Map<String, Object> data = buildDTO(userModel);

        String uri = System.getenv("USER_SERVICE_URI");
        HttpResponse response =  HttpRequestHelper.sendRequest(uri, tokenProvider.getAccessToken(), HttpMethod.POST, data);

        logger.info("Request Body: " + data);
        logger.info("POSTing to " + uri + " complete...");
        logger.info("Response Status Code: " + response.statusCode());
        logger.info("Response Body: " + response.body());
    }

    @Override
    public void handle(TokenProvider tokenProvider, KeycloakSession session, AdminEvent event) {
        String resourcePath = event.getResourcePath();
        String userId = resourcePath != null && resourcePath.startsWith("users/") ?
                resourcePath.substring("users/".length()) : "";

        RealmModel realm = session.realms().getRealm(event.getRealmId());
        UserModel userModel = session.users().getUserById(realm, userId);

        if (userModel == null) {
            logger.warn("User not found for ID: " + userId);
            return;
        }

        Map<String, Object> data = buildDTO(userModel);

        String uri = System.getenv("USER_SERVICE_URI");
        HttpResponse response =  HttpRequestHelper.sendRequest(uri, tokenProvider.getAccessToken(), HttpMethod.POST, data);

        logger.info("Request Body: " + data);
        logger.info("POSTing to " + uri + " complete...");
        logger.info("Response Status Code: " + response.statusCode());
        logger.info("Response Body: " + response.body());
    }

    /* Extract the necessary data to match the user-service DTO */
    private Map<String, Object> buildDTO(UserModel userModel) {
        /* Update user-service DTO and determine the final user-registration data */
        Map<String, List<String>> attributes = userModel.getAttributes();
        logger.info("Getting user attributes...");
        logger.info("Attributes: " + attributes);

        String username = userModel.getUsername();
        String name = attributes.get("name").getFirst();
        String email = userModel.getEmail();

        Map<String, Object> data = new HashMap<>();
        data.put("name", name);
        data.put("username",username);

        return data;
    }
}
