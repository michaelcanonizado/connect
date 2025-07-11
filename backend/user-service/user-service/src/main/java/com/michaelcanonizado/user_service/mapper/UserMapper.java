package com.michaelcanonizado.user_service.mapper;

import com.michaelcanonizado.user_service.dto.UserCreateDTO;
import com.michaelcanonizado.user_service.dto.UserResponseDTO;
import com.michaelcanonizado.user_service.dto.UserUpdateDTO;
import com.michaelcanonizado.user_service.models.User;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {
    public User fromCreateDTO(UserCreateDTO dto) {
        return new User(
                dto.name(),
                dto.username(),
                null,
                null,
                false,
                null
        );
    }

    public void updateFromUpdateDTO(User user, UserUpdateDTO dto) {
        if (dto.name() != null) {
            user.setName(dto.name());
        }
        if (dto.username() != null) {
            user.setUsername(dto.username());
        }
        if (dto.bio() != null) {
            user.setBio(dto.bio());
        }
        if (dto.profileUrl() != null) {
            user.setProfileUrl(dto.profileUrl());
        }
    }

    public UserResponseDTO toResponseDTO(User user) {
        return new UserResponseDTO(
                user.getId(),
                user.getName(),
                user.getUsername(),
                user.getBio(),
                user.getProfileUrl(),
                user.getIsOnline(),
                user.getLastSeenAt()
        );
    }
}
