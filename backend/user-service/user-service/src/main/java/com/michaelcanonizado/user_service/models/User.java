package com.michaelcanonizado.user_service.models;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    /* Sub/ID of the user's instance on Keycloak */
    @Column(nullable = false, unique = true)
    private UUID authId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String username;

    private String bio;
    private String profileUrl;

    private boolean isOnline;
    private Instant lastSeenAt;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private Instant createdAt;
    @LastModifiedDate
    private Instant updatedAt;

    public User() {
    }

    public User(UUID authId, String name, String username, String bio, String profileUrl, boolean isOnline, Instant lastSeenAt) {
        this.authId = authId;
        this.name = name;
        this.username = username;
        this.bio = bio;
        this.profileUrl = profileUrl;
        this.isOnline = isOnline;
        this.lastSeenAt = lastSeenAt;
    }

    public UUID getId() {
        return id;
    }

    public UUID getAuthId() {
        return authId;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getBio() {
        return bio;
    }

    public String getProfileUrl() {
        return profileUrl;
    }

    public boolean getIsOnline() {
        return isOnline;
    }

    public Instant getLastSeenAt() {
        return lastSeenAt;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public void setProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
    }

    public void setIsOnline(boolean online) {
        isOnline = online;
    }

    public void setLastSeenAt(Instant lastSeenAt) {
        this.lastSeenAt = lastSeenAt;
    }
}
