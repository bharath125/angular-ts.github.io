import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  title = 'Three Component Title';
 
  constructor(private titleService:Title){}
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
