import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './home/add-student/add-student.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { EditStudentComponent } from './home/edit-student/edit-student.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'edit/:id',component:EditStudentComponent},
  {path:"**",redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
