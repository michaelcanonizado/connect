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

        Map<String, List<String>> attributes = userModel.getAttributes();
        String username = userModel.getUsername();
        String email = userModel.getEmail();
        logger.info("Getting user attributes...");
        logger.info("Attributes: " + attributes);

        /* Name should be a generic name just like in instagram.
           Not Firstname and Lastname. Also update user-service DTO,
           More attributes can be passed such as email. */
        Map<String, Object> data = new HashMap<>();
        data.put("name",userModel.getFirstName());
        data.put("username",username);
        String uri = System.getenv("USER_SERVICE_URI");

        HttpResponse response =  HttpRequestHelper.sendRequest(uri, tokenProvider.getAccessToken(), HttpMethod.POST, data);
        logger.info("POSTing to " + uri + " complete...");
        logger.info("Status Code: " + response.statusCode());
        logger.info("Body: " + response.body());
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

        Map<String, List<String>> attributes = userModel.getAttributes();
        String username = userModel.getUsername();
        String email = userModel.getEmail();
        logger.info("Getting user attributes...");
        logger.info("Attributes: " + attributes);

        /* Name should be a generic name just like in instagram.
           Not Firstname and Lastname. Also update user-service DTO,
           More attributes can be passed such as email. */
        Map<String, Object> data = new HashMap<>();
        data.put("name",userModel.getFirstName());
        data.put("username",username);
        String uri = System.getenv("USER_SERVICE_URI");

        HttpResponse response =  HttpRequestHelper.sendRequest(uri, tokenProvider.getAccessToken(), HttpMethod.POST, data);
        logger.info("POSTing to " + uri + " complete...");
        logger.info("Status Code: " + response.statusCode());
        logger.info("Body: " + response.body());
    }
}
