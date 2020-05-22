import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TodosService } from '../services/todos.service';
import {map,filter} from 'rxjs/operators';
import { Todo } from '../models/todo';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  closeResult = '';
  todos:Todo[]=new Array<Todo>();
  newTodos:Todo[]


  constructor(private authService:AuthService,private modalService:NgbModal,private todoService:TodosService,private router:Router) { }

  ngOnInit(): void {

    this.getTodosForToday();
  }

  loggedOut()
  {
     this.authService.loggedOut();
  }

  isLoggedIn()
  {
    return this.authService.isLoggedIn();
  }

  getTodosForToday()
  {
    let dateN=new Date();
    let date=new DatePipe('en-US');
    let newDate=date.transform(Date.now(),'yyyy-MM-dd');
    let y=new Date(newDate);
    console.log(newDate);
    let email=sessionStorage.getItem('auth');
    this.todoService.getTodoByUserEmail(email)
    .subscribe(todos=>
        {
          this.newTodos=Object.values(todos);
          for(let todo of this.newTodos){
          let j=date.transform(todo.targetDate,'yyyy-MM-dd');
          if(j==newDate)this.todos.push(todo);
          }
        })
  }

  changeStatus(todo)
  {
    if(todo.done==true)todo.done=false;
    else todo.done=true;
    this.todoService.putTodo(todo.id,todo).subscribe(
      ()=>
      {
         this.router.navigate(['home']);
      }
    );
  }




  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

