import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private checkeLogIn:AuthService,private router:Router){}

 
  onLogIn(){
    this.checkeLogIn.loginUser()
    localStorage.setItem("isLoggedIn","true");
    this.router.navigate(['/students'])
    console.log("log in value",this.checkeLogIn.isStudentLogin())
  }

}
