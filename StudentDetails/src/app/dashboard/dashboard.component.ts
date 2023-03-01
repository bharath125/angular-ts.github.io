import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

import { StudentDataService } from '../services/student-data.service';
import { Student } from '../student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  selectedStudent: Student = new Student();

  list: any[] = [];
  constructor(
    private studentData: StudentDataService,
    private checkLogout: AuthService,
    private router: Router,
    public route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.list = this.studentData.getAll();
  }

  count = this.studentData.studentList.length;

  Ondelete(arg: any) {}

  onLogOut() {
    this.checkLogout.logoutUser();
    this.router.navigate(['']);
    console.log('log out value', this.checkLogout.logoutUser());
    localStorage.removeItem('isLoggedIn');
  }

  OnEdit(arg: Student) {
    this.router.navigate(['/students', arg.id, 'edit']);

    this.selectedStudent = Object.assign({}, arg);
  }

  cancel(): void {
    console.log('cancel clicked');
  }

  confirm(arg: any) {
    console.log(arg);
    this.list = this.studentData.getAll().filter((e) => e.id !== arg);
    let a = this.studentData.studentList.filter((e) => e.id !== arg);
    this.studentData.studentList = a;
    this.count = this.studentData.studentList.length;
  }
}
