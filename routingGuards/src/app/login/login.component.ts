import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceGuard } from '../auth-service.guard';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidCredentialMsg?: string;
  username?:string;
  password?:string;
  retUrl:string|null="home";
  
  constructor(private authService: AuthService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.get('retUrl')
        console.log('LoginComponent/ngOnInit ' + this.retUrl);
      });

  } 

  onFormSubmit(loginForm: { value: { username: string; password: string; }; }) {
    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(data => {
        console.log( 'return to '+ this.retUrl);
        if (this.retUrl!=null) {
             this.router.navigate( [this.retUrl]);
        } else {
             this.router.navigate( ['home']);
        }
    });
 }


}
