import { EventEmitter, OnInit, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit{
  ngOnInit() {
  }

  @Input() customer:Customer=new Customer()
  @Output() customerChange:EventEmitter<Customer>=new EventEmitter<Customer>()

  update() {
    this.customerChange.emit(this.customer);
  }

}
