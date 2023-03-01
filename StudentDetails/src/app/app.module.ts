import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentDataService } from './services/student-data.service';
import { StudentComponent } from './student/student.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutGuardGuard } from './guards/logout-guard.guard';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginAuthGuard } from './services/login-auth.guard';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddStudentComponent,
    StudentComponent,
    StudentEditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    NzLayoutModule,
    NzFormModule,
    NzSpaceModule,
    NzPopconfirmModule,
    NzRadioModule,
    NzCheckboxModule,
    NzInputModule,
    NzDropDownModule,
    NzIconModule,
    NzSelectModule,
  ],
  providers: [StudentDataService, AuthGuard, LoginAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
