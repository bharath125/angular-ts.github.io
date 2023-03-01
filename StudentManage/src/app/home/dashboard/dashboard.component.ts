import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditService } from 'src/app/services/edit.service';
import { ValidationService } from 'src/app/services/validation.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  studentList!:Student[]

  constructor(private router:Router,
    private editService:EditService,
    private login:ValidationService){}

ngOnInit() {
  let localVar=localStorage.getItem('studentData')
  if (localVar){
    this.studentList=JSON.parse(localVar)
  }
}

onEdit(item:Student){
  this.editService.edit(item)
  this.router.navigate(['edit',item.id])
}

onLogout(){
  this.login.checkIsStudentIn()
  this.router.navigate(['login'])

}

onDelete(item:any){
  let indexOfStudent=this.studentList.indexOf(item)

  this.studentList.splice(indexOfStudent,1)
  localStorage.setItem('studentData',JSON.stringify(this.studentList))
}


onAddStudent(){
  this.router.navigate(['add-student'])
}

}
