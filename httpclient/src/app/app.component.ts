import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Repos{
  id?:string;
  name?:string;
  html_url?:string;
  description?:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'httpclient';
  userName: string = "tektutorialshub"
  baseURL: string = "https://api.github.com/";
  repos?: Repos[];
  
constructor(private http:HttpClient){
}
  ngOnInit() {
    this.getRepos()
  }

public getRepos(){
  return this.http.get<Repos[]>(this.baseURL+'users/'+this.userName+'/repos').subscribe(
    (response)=>{
      console.log('response recived')
      console.log(response)
      this.repos=response
    },
    (error)=>{
      console.error('Request failed with error')
      alert(error)
    },
    ()=>{
      console.log('Request completed')
    }
  )
}

}
