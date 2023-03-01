import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Template Driven Form';

  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  contact!: contact;

  

ngOnInit(){
  this.contact={
    firstname:"Sachin",
  lastname:"Tendulkar",
  email:"sachin@gmail.com",
  gender:"male",
  isMarried:true,
  country:"1",
  address: {
    city:"Mumbai",
    street:"Navi",
    pincode:"400050",
  }
  }
}

setDefaults(){
    
  this.contact={
    firstname:"Sachin",
  lastname:"Tendulkar",
  email:"sachin@gmail.com",
  gender:"male",
  isMarried:true,
  country:"1",
  address: {
    city:"Mumbai",
    street:"Navi",
    pincode:"400050",
  }
  }
}

changeCountry(){
  this.contact.country="1"
}


reset(contactForm:NgForm){
contactForm.resetForm()
}
  onSubmit(contactForm:any){
    console.log(this.contact)
  }
}

export  interface contact {
  firstname:string;
  lastname:string;
  email:string;
  gender:string;
  isMarried:boolean;
  country:string;
  address: {
    city:string;
    street:string;
    pincode:string;
  }
} 
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }

  
  
}


