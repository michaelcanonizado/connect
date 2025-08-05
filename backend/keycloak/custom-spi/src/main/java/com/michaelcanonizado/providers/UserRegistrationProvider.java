package com.michaelcanonizado.providers;

import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventType;
import org.keycloak.events.admin.AdminEvent;
import org.keycloak.events.admin.OperationType;
import org.keycloak.events.admin.ResourceType;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.models.UserModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;

public class UserRegistrationProvider implements EventListenerProvider {
    private KeycloakSession session;
    private Logger logger = LoggerFactory.getLogger(UserRegistrationProvider.class);

    public UserRegistrationProvider(KeycloakSession session) {
        this.session = session;
    }

    @Override
    // Non-Admin Events
    public void onEvent(Event event) {
        if (!EventType.REGISTER.equals(event.getType())) {
            return;
        }

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
    // Admin Events
    public void onEvent(AdminEvent adminEvent, boolean includeRepresentation) {
        if (
                adminEvent.getResourceType().name().equals(ResourceType.USER.toString()) &&
                adminEvent.getOperationType().name().equals(OperationType.CREATE.toString())
        ) {
            String resourcePath = adminEvent.getResourcePath();
            String userId = resourcePath != null && resourcePath.startsWith("users/") ?
                            resourcePath.substring("users/".length()) : "";

            RealmModel realm = session.realms().getRealm(adminEvent.getRealmId());
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

    @Override
    public void close() {

    }
}
