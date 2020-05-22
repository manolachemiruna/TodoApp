package com.example.SpringWithDatabase.controllers;

import com.example.SpringWithDatabase.models.Todo;
import com.example.SpringWithDatabase.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {

    @Autowired
    private TodoService service;

    @PostMapping("/addTodo")
    public Todo addTodo(@RequestBody Todo todo) {
        return service.saveTodo(todo);
    }

    @PostMapping("/addTodos")
    public List<Todo> addTodos(@RequestBody List<Todo> todos) {
        return service.saveTodos(todos);
    }

    @GetMapping("/todos")
    public List<Todo> findAllTodos() {
        return service.getTodos();
    }

    @GetMapping("/todoById/{id}")
    public Todo findTodoById(@PathVariable int id) {
        return service.getTodoById(id);
    }

    @GetMapping("/todoByUserEmail/{email}")
    public List<Todo> findTodoById(@PathVariable String email) {
        return service.getTodoByUserEmail(email);
    }


    @PutMapping("/updateTodo/{id}")
    public Todo updateTodo(@PathVariable int id,@RequestBody Todo todo) {
        return service.updateTodo(id,todo);
    }

    @DeleteMapping("/deleteTodo/{id}")
    public Todo deleteTodo(@PathVariable int id) {
        return service.deleteTodo(id);
    }


}