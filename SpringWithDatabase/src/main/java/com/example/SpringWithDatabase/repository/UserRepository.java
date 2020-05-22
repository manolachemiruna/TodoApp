package com.example.SpringWithDatabase.repository;

import com.example.SpringWithDatabase.models.Todo;
import com.example.SpringWithDatabase.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Map;

public interface UserRepository extends JpaRepository<User,Integer> {

    int getUserIdByEmail(String email);
    User findByEmail(String email);
}