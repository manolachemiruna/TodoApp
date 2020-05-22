package com.example.SpringWithDatabase.services;

import com.example.SpringWithDatabase.models.User;
import com.example.SpringWithDatabase.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public User saveUser(User user) {

        return repository.save(user);
    }

    public List<User> saveUsers(List<User> users) {
        return repository.saveAll(users);
    }

    public List<User> getUsers() {
        return repository.findAll();
    }

    public User getUserById(int id) {
        return repository.findById(id).orElse(null);
    }

    public User getUserByEmail(String email)
    {
        return repository.findByEmail(email);
    }


    public int getUserIdByEmail(String email)
    {
        List<User> u= new ArrayList<User>();
        u.add(repository.findByEmail(email));

        if(u!=null)return u.get(0).getId();
        else return 0;
    }

    public String deleteUser(int id) {

        repository.deleteById(id);

        return "user removed !! " + id;
    }


    public User updateUser(User user) {
        User existinguser = repository.findById(user.getId()).orElse(null);
        existinguser.setFirstname(user.getFirstname());
        existinguser.setLastname(user.getLastname());
        existinguser.setEmail(user.getEmail());
        return repository.save(existinguser);
    }


    /*public User saveUser(User user)
    {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
         return repository.save(user);
    }*/



}