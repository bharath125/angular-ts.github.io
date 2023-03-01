import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subjects } from '../add-student/add-student.component';
import { StudentDataService } from '../services/student-data.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit {
  studentFound: boolean = false;
  validateForm!: UntypedFormGroup;
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

  constructor(
    private data: StudentDataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: UntypedFormBuilder
  ) {
    this.validateForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      grade: ['', [Validators.required]],
    });
  }

  onSubmit() {
    // let id = this.route.snapshot.params['id'];
    // let data: any = this.data.studentList.find((e) => e.id === id);
    this.router.navigate(['students']);
  }

  // onUpdate() {
  //   let id = this.route.snapshot.params['id'];
  //   let list: any = this.studentForm.value;
  //   if (this.data.studentList.includes(list)) {
  //     window.confirm(
  //       'same student data already there. Do you still want to update?'
  //     );
  //   } else {
  //     let newValue: any = this.data.studentList.find((e) => e.id === id);
  //     let index: number = this.data.studentList.indexOf(newValue);
  //     this.data.studentList.slice(index, index + 1);
  //     let newlist: Object = this.studentForm.value;
  //     console.log(newlist);
  //     // this.data.studentList.push(newlist);
  //     this.data.updateStudent(id, list);
  //   }
  //   console.log(list);
  //   this.router.navigate(['/students']);
  // }

  subjectList: Subjects[] = [
    new Subjects('1', 'Maths'),
    new Subjects('2', 'English'),
    new Subjects('3', 'Chemistry'),
    new Subjects('4', 'Physics'),
    new Subjects('5', 'History'),
  ];

  //////////////////////////////nz-form/////////////////

  ngOnInit() {
    // this.validateForm = new FormGroup({
    //   id: new FormControl(''),
    //   firstName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(4),
    //   ]),
    //   lastName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(2),
    //   ]),
    //   subject: new FormControl('', [Validators.required]),
    //   grade: new FormControl('', [Validators.required]),
    // });

    console.log(this.route.snapshot.params);
    if (this.route.snapshot.params && this.route.snapshot.params['id']) {
      let studentData = this.data.getUser(this.route.snapshot.params['id']);
      let value = this.validateForm;
      console.log(value);
      if (studentData) {
        this.studentFound = true;
        //this.studentForm.patchValue(studentData);
        this.validateForm.patchValue(studentData);
      }
    }
  }

  submitForm() {
    let id = this.route.snapshot.params['id'];
    let list: any = this.validateForm.value;
    if (this.data.studentList.includes(list)) {
      window.confirm(
        'same student data already there. Do you still want to update?'
      );
    } else {
      let newValue: any = this.data.studentList.find((e) => e.id === id);
      let index: number = this.data.studentList.indexOf(newValue);
      this.data.studentList.slice(index, index + 1);
      let newlist: Object = this.validateForm.value;
      console.log(newlist);
      // this.data.studentList.push(newlist);
      this.data.updateStudent(id, list);
    }
    console.log(list);
    this.router.navigate(['/students']);
  }

  onBack() {
    this.router.navigate(['students']);
  }
}
