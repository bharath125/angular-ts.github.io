import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'title Service Example';
  

  constructor(private titlenew:Title,private metaService:Meta){}

  ngOnInit() {
    this.titlenew.setTitle(this.title)
    console.log(this.metaService.getTags("content"))
  }
}
