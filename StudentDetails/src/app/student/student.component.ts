import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentDataService } from '../services/student-data.service';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{


  
  student:any
  selectedStudent:Student=new Student()
constructor(private route:ActivatedRoute,private studentService:StudentDataService){}

ngOnInit() {
  let id=(this.route.snapshot.params['id'])
  console.log(id)
  this.student=this.studentService.getUser(id);
  console.log(this.student)
}

onEdit(std:Student){
  this.selectedStudent=Object.assign({},std)
  
}

}

