package com.michaelcanonizado.user_service.dto;

import java.util.UUID;

public record UserCreateDTO(
        UUID authId,
        String username,
        String name,
        String email,
        String bio
) {}