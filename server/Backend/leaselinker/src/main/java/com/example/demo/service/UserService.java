package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return false; // User already exists
        }
        userRepository.save(user);
        return true;
    }

    public boolean loginUser(User user) {
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return true;
        }
        return false; // Invalid login credentials
    }
}
