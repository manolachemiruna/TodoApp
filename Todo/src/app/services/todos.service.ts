import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http :HttpClient) { }

  postTodo(todo)
  {
    return this.http.post(`http://localhost:8080/addTodo`,todo);
  }

  getTodoByUserEmail(email)
  {
    return this.http.get(`http://localhost:8080/todoByUserEmail/${email}`);
  }

  getUserIdByEmail(email)
  {
    return this.http.get(`http://localhost:8080/userIdByEmail/${email}`);

  }

  putTodo(id,todo)
  {
    return this.http.put(`http://localhost:8080/updateTodo/${id}`,todo);
  }

  deleteTodo(id)
  {
    return this.http.delete(`http://localhost:8080/deleteTodo/${id}`);
  }
}
