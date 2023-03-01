import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    EditStudentComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[]
  
})
export class HomeModule { }
