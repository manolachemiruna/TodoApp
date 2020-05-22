import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router:Router,private http :HttpClient) { }

  register(user)
  {
      return this.http.post('http://localhost:8080/addUser',user);
  }

  emailAlreadyExist(email)
  {
    return this.http.get(`http://localhost:8080/userByEmail/${email}`,email);

  }

  isLoggedIn()
  {
    if(sessionStorage.getItem('auth'))return true;
    else
    {
      return false;
    } 
  }

  login()
  {
    return this.http.get('http://localhost:8080/users');
  }

  loggedOut()
  {
    sessionStorage.removeItem('auth');
    this.router.navigate(['logout']);

  }
}
