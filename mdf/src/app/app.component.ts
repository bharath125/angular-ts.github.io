import { Component } from '@angular/core';
import {FormGroup, FormControl,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Driven Forms';


  contactForm=new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
    email:new FormControl(),
    gender:new FormControl(),
    isMarried:new FormControl(),
    country:new FormControl()
  })

  onSubmit(){
    console.log(this.contactForm.value)
  }



}
