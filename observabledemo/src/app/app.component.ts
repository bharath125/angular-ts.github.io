import { Component, OnInit } from '@angular/core';
import { Observable,of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observabledemo';

ngOnInit(){
 this.obs.subscribe(
  val=>{console.log(val)},
  error=>{console.log(error)},
  ()=>{console.log("asynchrouns data Completed")}
 )
const array=[1,2,3,4,5]
const obs1=of(array)
obs1.subscribe(
  val=>{console.log(val)},
  error=>{console.log(error)},
  ()=>console.log("Compelted")
)

}

obs=new Observable((observer)=>{
  console.log("Observable Starts")
  setTimeout(()=>{observer.next("1"),10000})
  setTimeout(()=>{observer.next("2"),20000})
  setTimeout(()=>{observer.next("3"),30000})
  setTimeout(()=>{observer.complete(),35000})
  setTimeout(()=>{observer.next("4"),40000})
  setTimeout(()=>{observer.next("5"),50000})
})



}
