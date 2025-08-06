package com.michaelcanonizado;

import com.michaelcanonizado.handlers.Handler;
import com.michaelcanonizado.handlers.ResourceOperationKey;
import com.michaelcanonizado.handlers.handleUserRegister;
import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventType;
import org.keycloak.events.admin.AdminEvent;
import org.keycloak.events.admin.OperationType;
import org.keycloak.events.admin.ResourceType;
import org.keycloak.models.KeycloakSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

public class CustomEventListenerProvider implements EventListenerProvider {
    private KeycloakSession session;
    private final TokenProvider tokenProvider;

    private Logger logger = LoggerFactory.getLogger(CustomEventListenerProvider.class);

    /* Custom Event Handlers */
    private final Map<EventType, Handler> userHandlers = new HashMap<>();
    private final Map<ResourceOperationKey, Handler> adminHandlers = new HashMap<>();

    public CustomEventListenerProvider(KeycloakSession session, TokenProvider tokenProvider) {
        this.session = session;
        this.tokenProvider = tokenProvider;

        /* User Events */
        userHandlers.put(EventType.REGISTER, new handleUserRegister());

        /* Admin Events */
        adminHandlers.put(new ResourceOperationKey(ResourceType.USER, OperationType.CREATE), new handleUserRegister());
    }

    @Override
    /* Non-Admin Events */
    public void onEvent(Event event) {
        EventType type = event.getType();
        Handler handler = userHandlers.get(type);

        if (handler == null) {
            logger.info("No custom event listener handler for user event: " + type);
            return;
        }

        handler.handle(session, event);
    }

    @Override
    /* Admin Events */
    public void onEvent(AdminEvent adminEvent, boolean includeRepresentation) {
        ResourceOperationKey key = new ResourceOperationKey(adminEvent.getResourceType(), adminEvent.getOperationType());
        Handler handler = adminHandlers.get(key);

        if (handler == null) {
            logger.info("No custom event listener handler for admin event: " + key);
            return;
        }

        String token = tokenProvider.getAccessToken();
        logger.info("GETTING TOKEN FROM HANDLE ADMIN: " + token);

        handler.handle(session, adminEvent);
    }

    @Override
    public void close() {

    }
}
