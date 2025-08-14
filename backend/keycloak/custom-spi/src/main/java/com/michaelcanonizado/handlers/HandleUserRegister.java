package com.michaelcanonizado.handlers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
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

public class HandleUserRegister implements Handler{
    private final Logger logger = LoggerFactory.getLogger(HandleUserRegister.class);
    private static final ObjectMapper mapper = new ObjectMapper()
            .enable(SerializationFeature.INDENT_OUTPUT);
    private static final ObjectWriter writer = mapper.writerWithDefaultPrettyPrinter();

    @Override
    public void handle(TokenProvider tokenProvider, KeycloakSession session, Event event) {
        System.out.println("=================================| CREATING USER | =================================");

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

        System.out.println();
        logger.info("Details:");
        System.out.println("Request Body: " + data);
        System.out.println("POSTing to " + uri + " complete...");
        System.out.println("Response Status Code: " + response.statusCode());
        System.out.println("Response Body: " + response.body());
        System.out.println();

        System.out.println("====================================================================================");
    }

    @Override
    public void handle(TokenProvider tokenProvider, KeycloakSession session, AdminEvent event) {
        System.out.println("=================================| CREATING USER | =================================");

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

        System.out.println();
        logger.info("Details:");
        System.out.println("Request Body: " + data);
        System.out.println("POSTing to " + uri + " complete...");
        System.out.println("Response Status Code: " + response.statusCode());
        System.out.println("Response Body: " + response.body());
        System.out.println();

        System.out.println("====================================================================================");
    }

    /* Extract the necessary data to match the user-service DTO */
    private Map<String, Object> buildDTO(UserModel userModel) {
        /* Update user-service DTO and determine the final user-registration data */
        Map<String, List<String>> attributes = userModel.getAttributes();
        logger.info("Getting user attributes...");
        logger.info("Attributes: " + attributes);

        String id = userModel.getId();
        String username = UserHelper.getSingleValue(attributes, "username");
        String name = UserHelper.getSingleValue(attributes, "name");
        String email = UserHelper.getSingleValue(attributes, "email");
        String bio = UserHelper.getSingleValue(attributes, "bio");

        Map<String, Object> data = new HashMap<>();
        data.put("authId", id);
        data.put("username",username);
        data.put("name", name);
        data.put("email", email);
        data.put("bio", bio);

        return data;
    }
}
