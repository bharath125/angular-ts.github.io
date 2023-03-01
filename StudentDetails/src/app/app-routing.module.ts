import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutGuardGuard } from './guards/logout-guard.guard';
import { LoginComponent } from './login/login.component';
import { LoginAuthGuard } from './services/login-auth.guard';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LogoutGuardGuard] },
  {
    path: 'students',
    component: DashboardComponent,
    canActivate: [LoginAuthGuard],
  },
  { path: 'students/:id', component: StudentEditComponent },
  {
    path: 'add-student',
    component: AddStudentComponent,
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'students/:id/edit',
    component: StudentEditComponent,
    canActivate: [LoginAuthGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
