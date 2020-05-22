import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodosService } from '../services/todos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos:Todo[]
  message:String
  values
  keys
  n
  email
  vector=new Array<number>()

  constructor(private todoService:TodosService,private router:Router) { }

  ngOnInit(): void {

    this.email=sessionStorage.getItem('auth');

    this.todoService.getTodoByUserEmail(this.email)

    .subscribe(todos=>{
     
      this.keys=Object.keys(todos);
      this.n=Object.entries.length;
      for(let i=1;i<=this.n;i+=5)this.vector.push(i);
      this.values=Object.values(todos);
      this.todos=this.values;

      });

  }


  updateTodo(todo)
  {
    this.router.navigate(['updateTodo',todo.id]);
  }

  deleteTodo(todo)
  {
    let id=todo.id;

    this.todoService.deleteTodo(id).subscribe(
      ()=>
      {
        this.message='Delete of todo is successful!';
        this.refreshTodos();
      }
  );
  }

  refreshTodos()
  {
    this.todoService.getTodoByUserEmail(this.email).subscribe(todos=>
      {
        this.keys=Object.keys(todos);
        this.n=Object.entries.length;
        for(let i=1;i<=this.n;i+=5)this.vector.push(i);
        this.values=Object.values(todos);
        this.todos=this.values;

      }
      );
  }





}
