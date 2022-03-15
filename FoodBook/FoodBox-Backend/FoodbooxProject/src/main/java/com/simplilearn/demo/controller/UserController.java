package com.simplilearn.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.simplilearn.demo.exception.ResourceNotFoundException;
import com.simplilearn.demo.model.User;
import com.simplilearn.demo.repository.UserRepository;

import java.util.List;
import java.util.Optional;



@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/v1/")
public class UserController {


    @Autowired
    private UserRepository userRepository;

    // get all users
    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    // create user rest api
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // get user by id rest api
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
        return ResponseEntity.ok(user);
    }
    
    
    

}
