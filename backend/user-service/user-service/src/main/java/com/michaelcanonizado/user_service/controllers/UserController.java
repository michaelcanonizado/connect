package com.michaelcanonizado.user_service.controllers;

import com.michaelcanonizado.user_service.dto.UserCreateDTO;
import com.michaelcanonizado.user_service.dto.UserResponseDTO;
import com.michaelcanonizado.user_service.dto.UserUpdateDTO;
import com.michaelcanonizado.user_service.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Controller
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserService service;

    @PostMapping("/users")
    public ResponseEntity<UserResponseDTO> addUser(@RequestBody UserCreateDTO dto) {
        UserResponseDTO user = service.create(dto);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserResponseDTO> getUser(@PathVariable UUID id, @AuthenticationPrincipal Jwt jwt) {
        UserResponseDTO user = service.get(id);

        String email = jwt.getClaim("email");
        System.out.println("Request made by: " + email);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@PathVariable UUID id, @RequestBody UserUpdateDTO dto) {
        UserResponseDTO user = service.update(id, dto);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable UUID id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/users/auth/{authId}")
    public ResponseEntity<Void> deleteUserByAuth(@PathVariable UUID authId) {
        service.deleteByAuthId(authId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
