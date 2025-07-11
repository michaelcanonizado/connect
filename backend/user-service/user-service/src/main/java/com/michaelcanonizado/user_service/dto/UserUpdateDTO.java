package com.michaelcanonizado.user_service.dto;

import java.time.Instant;
import java.util.UUID;

public record UserUpdateDTO(
        String name,
        String username,
        String bio,
        String profileUrl
) {}
