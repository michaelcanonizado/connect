package com.michaelcanonizado.user_service.dto;

import java.time.Instant;
import java.util.UUID;

public record UserResponseDTO(
        UUID id,
        String name,
        String username,
        String bio,
        String profileUrl,
        boolean isOnline,
        Instant lastSeenAt
) {}
