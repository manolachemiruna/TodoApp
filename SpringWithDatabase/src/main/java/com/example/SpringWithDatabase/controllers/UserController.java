package com.example.SpringWithDatabase.controllers;

import com.example.SpringWithDatabase.models.User;
import com.example.SpringWithDatabase.repository.UserRepository;
import com.example.SpringWithDatabase.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return service.saveUser(user);
    }

    @PostMapping("/addUsers")
    public List<User> addUsers(@RequestBody List<User> users) {
        return service.saveUsers(users);
    }

    @GetMapping("/users")
    public List<User> findAllUsers() {
        return service.getUsers();
    }

    @GetMapping("/userById/{id}")
    public User findUsertById(@PathVariable int id) {
        return service.getUserById(id);
    }

    @GetMapping("/userIdByEmail/{email}")
    public int getUserIdByEmail(@PathVariable String email)
    {
        return service.getUserIdByEmail(email);
    }

    @GetMapping("/userByEmail/{email}")
    public User getUserByEmail(@PathVariable String email)
    {
        return service.getUserByEmail(email);
    }

    @PutMapping("/update")
    public User updateUser(@RequestBody User user) {
        return service.updateUser(user);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable int id) {
        return service.deleteUser(id);
    }





}