package com.michaelcanonizado.user_service.controllers;

import com.michaelcanonizado.user_service.dto.UserCreateDTO;
import com.michaelcanonizado.user_service.dto.UserResponseDTO;
import com.michaelcanonizado.user_service.dto.UserUpdateDTO;
import com.michaelcanonizado.user_service.exceptions.InvalidRequestException;
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
    public ResponseEntity<UserResponseDTO> addUser(@RequestBody UserCreateDTO userCreateDTO) {
        UserResponseDTO createdUser = userService.create(userCreateDTO);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserResponseDTO> getUser(@PathVariable UUID id) {
        UserResponseDTO foundUser = userService.get(id);
        return new ResponseEntity<>(foundUser, HttpStatus.OK);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@PathVariable UUID id, @RequestBody UserUpdateDTO userUpdateDTO) {
        System.out.println(userUpdateDTO);

        UserResponseDTO updatedUser = userService.update(id, userUpdateDTO);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable UUID id) {
        userService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
