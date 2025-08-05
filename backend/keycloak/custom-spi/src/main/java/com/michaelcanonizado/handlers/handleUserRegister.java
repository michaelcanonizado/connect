package com.michaelcanonizado.handlers;

import com.michaelcanonizado.CustomEventListenerProvider;
import org.keycloak.events.Event;
import org.keycloak.events.admin.AdminEvent;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.models.UserModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;

public class handleUserRegister implements Handler{
    private Logger logger = LoggerFactory.getLogger(CustomEventListenerProvider.class);

    @Override
    public void handle(KeycloakSession session, Event event) {
        String userId = event.getUserId();
        RealmModel realm = session.realms().getRealm(event.getRealmId());
        UserModel userModel = session.users().getUserById(realm, userId);

        if (userModel == null) {
            logger.warn("User not found for ID: " + userId);
            return;
        }

        String username = userModel.getUsername();
        String email = userModel.getEmail();
        Map<String, List<String>> attributes = userModel.getAttributes();

        logger.info("NEW USER REGISTERED:");
        logger.info("Realm: " + realm.getName());
        logger.info("User created: " + username);
        logger.info("User Id: " + userId);
        logger.info("Email: " + email);
        logger.info("Attributes: " + attributes);
    }

    @Override
    public void handle(KeycloakSession session, AdminEvent event) {
        String resourcePath = event.getResourcePath();
        String userId = resourcePath != null && resourcePath.startsWith("users/") ?
                resourcePath.substring("users/".length()) : "";

        RealmModel realm = session.realms().getRealm(event.getRealmId());
        UserModel userModel = session.users().getUserById(realm, userId);

        if (userModel == null) {
            logger.warn("User not found for ID: " + userId);
            return;
        }

        String username = userModel.getUsername();
        String email = userModel.getEmail();
        Map<String, List<String>> attributes = userModel.getAttributes();

        logger.info("Realm: " + realm.getName());
        logger.info("User created: " + username);
        logger.info("User Id: " + userId);
        logger.info("Email: " + email);
        logger.info("Attributes: " + attributes);
    }
}
