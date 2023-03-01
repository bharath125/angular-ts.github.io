import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isloggedIn: boolean;

  constructor() {
    this.isloggedIn = false;
   }
  
  isStudentLogin():boolean{
    return this.isloggedIn
  }
  logoutUser() {
    this.isloggedIn =false
    return this.isloggedIn
  }
  loginUser(){
    this.isloggedIn = true;
    return this.isloggedIn
  }
}
 