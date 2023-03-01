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

@Injectable({
  providedIn: 'root',
})
export class LogoutGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isStudentLogin()) {
      if (this.router.url == '/' || this.router.url == '') {
        this.router.navigate(['students']);
      }
      return false;
    } else {
      let statusFromStorage = localStorage.getItem('isLoggedIn');
      if (statusFromStorage == 'true') {
        this.authService.loginUser();
        if (this.router.url == '/' || this.router.url == '') {
          this.router.navigate(['students']);
        }
        return false;
      }
      return true;
    }
  }
}
