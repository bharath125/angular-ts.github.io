import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
    console.log(this.authService.isStudentLogin());
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isStudentLogin()) {
      console.log(route.url[0].path);

      return true;
    } else {
      let statusFromStorage = localStorage.getItem('isLoggedIn');
      if (statusFromStorage == 'true') {
        this.authService.loginUser();
        return true;
      } else {
        alert(
          'Please log in into Student details.You are redirected to Log In Page'
        );
        this.router.navigate(['/']);
        console.log(route.url[0].path);
        return false;
      }
    }
  }
}
