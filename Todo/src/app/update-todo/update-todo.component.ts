import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from '../models/todo';
import { TodosService } from '../services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  description:String
  targetDate:NgbDateStruct
  done:boolean
  todo:Todo=new Todo()
  id:number

  constructor(private todoService:TodosService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];

  }

  update()
  {
    this.todo.description=this.description;
    this.todo.targetDate= new Date(this.targetDate.year, this.targetDate.month, this.targetDate.day);
    this.todo.done=this.done;
    this.todoService.putTodo(this.id,this.todo).subscribe(
      ()=>
      {
        this.router.navigate(['home']);
      }
    );
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
