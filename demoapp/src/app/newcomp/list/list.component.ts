import { Component,Input,EventEmitter,Output,OnChanges,SimpleChange,SimpleChanges,OnInit} from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

@Input() customerslist:Customer[]=[]

@Output() selectedUser=new EventEmitter<Customer>()

selectUser(customer:Customer){
this.selectedUser.emit(customer)
}


constructor(){
  console.log("constructor")

}

ngOnInit() {
  console.log("oninit hook raised")
  
}


}
