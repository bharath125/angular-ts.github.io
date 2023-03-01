import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{

item:any

  constructor(
    private editService:EditService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){}

  studentForm=new FormGroup({
    id:new FormControl(''),
    lastName:new FormControl('',[Validators.required,Validators.minLength(4)]),
    subject:new FormControl('',[Validators.required]),
    grade:new FormControl('',[Validators.required])
  })

ngOnInit() {
  let idValue=this.activatedRoute.snapshot.paramMap.get('id')
  console.log(idValue)
  if(!idValue){
    this.router.navigate(['dashboard'])
    return 
  }
let newId= Number.parseInt(idValue)
const local=localStorage.getItem('studentData')
if (local){
  this.item=JSON.parse(local).find((i:any)=>i.id===newId)
  if (this.item===undefined){
    this.router.navigate(['dashboard'])
    return
  }
  ///need to add the form values automatically
  this.studentForm.value.lastName=this.item.name
  this.studentForm.value.subject=this.item.subject
  this.studentForm.value.grade=this.item.grade
  this.studentForm.value.id=this.item.id

}


}

onSubmit(){
  let value=this.studentForm.value
  console.log(value)


  const storage=localStorage.getItem('studentData')
  if (storage){
    this.subjectList=S
  }
}


subjectList:Subjects[]=[
  new Subjects("1","Maths"),
  new Subjects("2","English"),
  new Subjects('3',"Chemistry"),
  new Subjects('4',"Physics"),
  new Subjects('5','History')
]


}
export class Subjects{
  id:string;
  name:string
    constructor(id:string,name:string){
      this.id=id;
      this.name=name
    }
  }