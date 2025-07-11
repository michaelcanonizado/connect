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

import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private UserMapper mapper;

    public UserResponseDTO create(UserCreateDTO userCreateDTO) {
        try {

            User user = mapper.fromCreateDTO(userCreateDTO);
            repository.save(user);
            User createdUser = repository.findById(user.getId()).orElseThrow(()-> new UserNotCreatedException("User not found after saving"));
            return mapper.toResponseDTO(createdUser);

        } catch (DataIntegrityViolationException | PersistenceException e) {
            throw new UserAlreadyExistException("User with username '" + userCreateDTO.username() + "' already exists");
        }
    }

    public UserResponseDTO get(UUID id) {
        User foundUser = repository.findById(id).orElseThrow(() -> new UserNotFoundException("User not found"));
        return mapper.toResponseDTO(foundUser);
    }

    public void delete(UUID id) {
        if (!repository.existsById(id)) {
            throw new UserNotFoundException("User being deleted doesn't exist");
        }
        repository.deleteById(id);
    }

    public UserResponseDTO update(UUID id, UserUpdateDTO userUpdateDTO) {
        try {
            User targetUser = repository.findById(id).orElseThrow(()-> new UserNotFoundException("User being updated doesn't exist"));
            mapper.updateFromUpdateDTO(targetUser, userUpdateDTO);
            repository.save(targetUser);
            return mapper.toResponseDTO(targetUser);
        } catch (DataIntegrityViolationException | PersistenceException e) {
            throw new UserAlreadyExistException("User being updated with username of '" + userUpdateDTO.username() + "' already exists");
        }
    }
}
