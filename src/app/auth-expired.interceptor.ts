import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth/auth.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(
      (response: Response) => {
        // DO STUFFS HERE
      },
      (error: Response) => {
        if (error.status === 401) {
          this.authService.token = null;
          localStorage.removeItem('token');
          this.router.navigate(['login']);
        }
      }
    ));
  }
}
