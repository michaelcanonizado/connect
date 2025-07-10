package com.michaelcanonizado.user_service.services;

import com.michaelcanonizado.user_service.models.User;
import com.michaelcanonizado.user_service.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User create(User user) {
        try {
            repository.save(user);
            return repository.findById(user.getId()).orElseThrow(()-> new RuntimeException("User not found after saving"));
        } catch (Exception e) {
            throw new RuntimeException("Error saving user", e);
        }
    }
}
