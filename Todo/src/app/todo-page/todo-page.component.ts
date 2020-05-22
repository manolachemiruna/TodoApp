import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  description:String
  targetDate:NgbDateStruct
  done:boolean
  todo:Todo
  id:number

  constructor(private todoService:TodosService,private router:Router) { }

  ngOnInit(): void {
  }

  create()
  {
     this.todo=new Todo();
     this.todo.description=this.description;
     let email=sessionStorage.getItem('auth');
     this.todo.userEmail=email;
     this.todo.done=this.done;
     this.todo.targetDate= new Date(this.targetDate.year, this.targetDate.month-1, this.targetDate.day);
     console.log(this.todo);
     this.todoService.postTodo(this.todo).subscribe(res=>{
       console.log(res);
     });
    
  }

  setTrue()
  {
    this.done=true;
  }

  setFalse()
  {
    this.done=false;
  }

  

  

}