import { Component } from '@angular/core';
import { GithubService } from './github.service';
import { repos } from './repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpgetmethod';
  userName: string = "tektutorialshub"
  pageNo="1"
  sortOn='description'
  repos?: repos[];
 
  loading: boolean = false;
  errorMessage: any;

constructor(private githubService:GithubService){}

public getRepos(){
  this.loading=true
  this.errorMessage=""
  this.githubService.getReposCatchError(this.userName).subscribe(
    (response: repos[] | undefined)=>{
      console.log('response recieved')
      this.repos=response
    },
    (error: any)=>{
      console.error('Request failed with error')
      this.errorMessage=error
      this.loading=false

      throw error
    },
    ()=>{
      console.log('Request completed')
      this.loading=false
    }
  )
}

}
