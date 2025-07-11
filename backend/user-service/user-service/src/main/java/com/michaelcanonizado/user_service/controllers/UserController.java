package com.michaelcanonizado.user_service.controllers;

import com.michaelcanonizado.user_service.exceptions.UserNotFoundException;
import com.michaelcanonizado.user_service.models.User;
import com.michaelcanonizado.user_service.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Controller
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User createdUser = userService.create(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable UUID id) {
        User foundUser = userService.get(id);
        return new ResponseEntity<>(foundUser, HttpStatus.OK);
    }
}
