package com.michaelcanonizado.user_service.dto;

import java.time.Instant;
import java.util.UUID;

public record UserCreateDTO(
        String name,
        String username
) {}