package com.example.SpringWithDatabase.services;

import com.example.SpringWithDatabase.models.Todo;
import com.example.SpringWithDatabase.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepository repository;

    public Todo saveTodo(Todo todo) {
        return repository.save(todo);
    }

    public List<Todo> saveTodos(List<Todo> todos) {
        return repository.saveAll(todos);
    }

    public List<Todo> getTodos() {
        return repository.findAll();
    }

    public Todo getTodoById(int id) {
        return repository.findById(id).orElse(null);
    }

    public List<Todo> getTodoByUserEmail(String email) {

        return repository.findByUserEmail(email);
    }

    public Todo deleteTodo(int id) {
        Todo todo=repository.findById(id).orElse(null);
        repository.deleteById(id);
        return todo;
    }

    public Todo updateTodo(int id,Todo todo) {
        Todo existingtodo = repository.findById(id).orElse(null);
        existingtodo.setDescription(todo.getDescription());
        existingtodo.setTargetDate(todo.getTargetDate());
        existingtodo.setDone(todo.isDone());
        return repository.save(existingtodo);
    }
}