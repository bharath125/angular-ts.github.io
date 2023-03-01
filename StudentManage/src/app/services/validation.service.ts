import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(public router:Router) { }
 
  checkIsStudentIn(){
    let student=localStorage.getItem("studentAuth")
    let studentAuthenticated=student!==null?JSON.parse(student):false
    let changeStudentAuthentication=!studentAuthenticated
    localStorage.setItem("studentAuth",JSON.stringify(changeStudentAuthentication))
    return changeStudentAuthentication
  }

}
