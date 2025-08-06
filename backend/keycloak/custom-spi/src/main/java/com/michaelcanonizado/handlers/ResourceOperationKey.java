package com.michaelcanonizado.handlers;

import org.keycloak.events.admin.OperationType;
import org.keycloak.events.admin.ResourceType;

public record ResourceOperationKey(ResourceType resourceType, OperationType operationType) {
}
