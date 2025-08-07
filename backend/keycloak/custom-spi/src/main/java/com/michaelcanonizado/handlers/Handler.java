package com.michaelcanonizado.handlers;

import com.michaelcanonizado.utils.TokenProvider;
import org.keycloak.events.Event;
import org.keycloak.events.admin.AdminEvent;
import org.keycloak.models.KeycloakSession;

public interface Handler {
    /* User Event Handlers */
    void handle(TokenProvider tokenProvider, KeycloakSession session, Event event);
    /* Admin Event Handlers */
    void handle(TokenProvider tokenProvider, KeycloakSession session, AdminEvent event);
}
