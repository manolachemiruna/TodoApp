import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import * as sha512 from 'js-sha512';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname=''
  lastname=''
  email=''
  password=''
  Cpassword=''
  user:User
  newUser:User
  message=''

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  createUser()
  {
    
    this.authService.emailAlreadyExist(this.email).subscribe(response=>
      {
        console.log(response);
        if(response!=null)this.message='Email already in use!';
        else
        {
          this.user=new User();
          this.user.firstname=this.firstname;
          this.user.lastname=this.lastname;
          this.user.email=this.email;
          if(this.password===this.Cpassword)this.user.password=sha512.sha512(this.password).toString();
          this.authService.register(this.user).subscribe(response=>console.log(response));
          this.router.navigate(["login"]);
        }
      });

  }




}
