import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    // console.log('===Auth Guard===');
    if (this.authService.isAuthenticated()) {

      // console.log(this.authService.isAuthenticated());
      return true;
    } else {
      // console.log('===Guarded===');
      this.router.navigate(['/']);
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['inventory', 'books']);
    }
    return true;
  }
}
