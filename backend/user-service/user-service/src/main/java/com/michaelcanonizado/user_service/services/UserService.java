package com.michaelcanonizado.user_service.services;

import com.michaelcanonizado.user_service.dto.UserCreateDTO;
import com.michaelcanonizado.user_service.dto.UserResponseDTO;
import com.michaelcanonizado.user_service.dto.UserUpdateDTO;
import com.michaelcanonizado.user_service.exceptions.UserAlreadyExistException;
import com.michaelcanonizado.user_service.exceptions.UserNotCreatedException;
import com.michaelcanonizado.user_service.exceptions.UserNotFoundException;
import com.michaelcanonizado.user_service.mapper.UserMapper;
import com.michaelcanonizado.user_service.models.User;
import com.michaelcanonizado.user_service.repositories.UserRepository;
import jakarta.persistence.PersistenceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private UserMapper mapper;

    public UserResponseDTO create(UserCreateDTO dto) {
        String temporaryProfilePicture = "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=";

        try {
            User user = mapper.fromCreateDTO(dto);
            user.setProfileUrl(temporaryProfilePicture);

            repository.save(user);
            User createdUser = repository.findById(user.getId()).orElseThrow(()-> new UserNotCreatedException("User not found after saving"));
            return mapper.toResponseDTO(createdUser);

        } catch (DataIntegrityViolationException | PersistenceException e) {
            throw new UserAlreadyExistException("User with username '" + dto.username() + "' already exists");
        }
    }

    public UserResponseDTO get(UUID id) {
        User user = repository.findById(id).orElseThrow(() -> new UserNotFoundException("User not found"));
        return mapper.toResponseDTO(user);
    }

    public UserResponseDTO getByAuthId(UUID authId) {
        User user = repository.findByAuthId(authId).orElseThrow(() -> new UserNotFoundException("User not found"));
        return mapper.toResponseDTO(user);
    }

    public List<UserResponseDTO> getUsers(String keyword) {
        if (keyword.isBlank()) {
            return List.of();
        }

            return repository.findByUsernameContainingIgnoreCaseOrNameContainingIgnoreCase(keyword, keyword).stream().map(user -> {
                return mapper.toResponseDTO(user);
            }).toList();
    }

    public UserResponseDTO update(UUID id, UserUpdateDTO dto) {
        try {
            User user = repository.findById(id).orElseThrow(()-> new UserNotFoundException("User being updated doesn't exist"));
            mapper.updateFromUpdateDTO(user, dto);
            repository.save(user);
            return mapper.toResponseDTO(user);
        } catch (DataIntegrityViolationException | PersistenceException e) {
            throw new UserAlreadyExistException("User being updated with username of '" + dto.username() + "' already exists");
        }
    }

    public void delete(UUID id) {
        if (!repository.existsById(id)) {
            throw new UserNotFoundException("User being deleted doesn't exist");
        }
        repository.deleteById(id);
    }

    public void deleteByAuthId(UUID authId) {
        User user = repository.findByAuthId(authId).orElseThrow(() -> new UserNotFoundException("User being deleted doesn't exist"));
        repository.deleteById(user.getId());
    }
}
