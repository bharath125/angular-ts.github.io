import { Component } from '@angular/core';
import { Customer}  from './customer';


@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent {
  userName='Bharath';
  noOfRooms=10;
  hideUser=true;

toggle(){
this.hideUser=!this.hideUser
  }

  nameChanged(arg:any) {
    console.log("modelchanged " + arg);
  }

value=""
handleInput(event:any) {
  this.value = event.target.value;
}

value1=""
keyHandle(event:any){
  this.value1 = (event.target).value;
}

name:any=""
clearName(){
this.name=""
}

num:number=0;

condition:boolean=false;
toggleNgIf(){
  this.condition=!this.condition
}

color:string='red';

toDate:Date=new Date();
msg:string="Hello World";

num1:number=9542.14554;
per:number=.7414;
cur:number=175;
temp:number=98;

customers: Customer[] = [
 
  {customerNo: 1, name: 'Rahuld Dravid', address: '', city: 'Banglaore', state: 'Karnataka', country: 'India'},
  {customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharastra', country: 'India'},
  {customerNo: 3, name: 'Saurrav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India'},
  {customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India'},
  {customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India'},

]

array:any;
selectUser(customer:Customer){
  console.log(customer)
  this.array=customer
}



}
