import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import{map,filter} from 'rxjs/operators';
import * as sha512 from 'js-sha512';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string
  password=''
  message
  user:User[]
  hashPassword:string
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

 

  login()
  {

     this.hashPassword=sha512.sha512(this.password).toString();
     
      this.authService.login()
      .subscribe(array=>{
        this.user=Object.values(array);
        for(let i=0;i<this.user.length;i++)
        {
          if(this.user[i].email==this.email && this.user[i].password===this.hashPassword)
          {
            sessionStorage.setItem('auth',this.user[i].email);
            this.router.navigate(["home"]);
          }
        }

        this.message="Invalid Credentials!";
        
      })
   
  }

}
