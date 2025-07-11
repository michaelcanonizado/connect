package com.michaelcanonizado.user_service.services;

import com.michaelcanonizado.user_service.exceptions.UserAlreadyExistException;
import com.michaelcanonizado.user_service.exceptions.UserNotCreatedException;
import com.michaelcanonizado.user_service.models.User;
import com.michaelcanonizado.user_service.repositories.UserRepository;
import jakarta.persistence.PersistenceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User create(User user) {
        try {
            repository.save(user);
            return repository.findById(user.getId()).orElseThrow(()-> new UserNotCreatedException("User not found after saving"));
        } catch (DataIntegrityViolationException | PersistenceException e) {
            throw new UserAlreadyExistException("User of username '" + user.getUsername() + "' already exists");
        }
    }
}
