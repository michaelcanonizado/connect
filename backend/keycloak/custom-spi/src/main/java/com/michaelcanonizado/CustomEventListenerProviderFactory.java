package com.michaelcanonizado;

import org.keycloak.Config;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventListenerProviderFactory;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.KeycloakSessionFactory;

public class CustomEventListenerProviderFactory implements EventListenerProviderFactory {
    private static final String PROVIDER_ID = "custom-event-listener";
    private TokenProvider tokenProvider;

    @Override
    public EventListenerProvider create(KeycloakSession keycloakSession) {
        return new CustomEventListenerProvider(keycloakSession, tokenProvider);
    }

    @Override
    public void init(Config.Scope scope) {
        String tokenUri = System.getenv("TOKEN_URI");
        String clientId = System.getenv("CLIENT_ID");
        String clientSecret = System.getenv("CLIENT_SECRET");

        tokenProvider = new TokenProvider(tokenUri, clientId, clientSecret);
    }

    @Override
    public void postInit(KeycloakSessionFactory keycloakSessionFactory) {

    }

    @Override
    public void close() {

    }

    @Override
    public String getId() {
        return PROVIDER_ID;
    }
}
