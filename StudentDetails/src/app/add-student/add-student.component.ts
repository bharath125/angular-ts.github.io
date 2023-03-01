import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentDataService } from '../services/student-data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  constructor(
    private studentService: StudentDataService,
    private router: Router,
    private fb: UntypedFormBuilder
  ) {}

  studentForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    subject: new FormControl('', [Validators.required]),
    grade: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    let data: any = this.studentForm.value;
    this.studentForm.reset();
    this.studentService.studentList.push(data);
    console.log(data);
    this.router.navigate(['students']);
  }
  subjectList = this.studentService.subjectList;

  /////////nz form

  selectedSub = 'Maths';
  submitForm() {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      let data: any = this.validateForm.value;
      console.log(data);
      this.studentService.studentList.push(data);
      this.validateForm.reset();
      this.router.navigate(['students']);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      grade: ['', [Validators.required]],
    });
  }
}

export class Subjects {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
