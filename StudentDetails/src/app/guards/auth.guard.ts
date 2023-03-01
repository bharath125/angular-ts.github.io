import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate() {
    if (this.loginService.isStdLogIn) {
      return true;
    } else {
      let statusFromStorage = localStorage.getItem('isLoggedIn');
      if (statusFromStorage == 'true') {
        return true;
      } else {
        return false;
      }
    }
  }
}
