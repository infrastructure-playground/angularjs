import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import {User} from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;
  public token: string;

  constructor(private httpClient: HttpClient,
              private router: Router) {
    this.token = localStorage.getItem('token');
  }

  getToken(token: string) {
    // value.token = response.token;
    this.token = token;
    localStorage.setItem('token', this.token);
    // this.user = value;
    return this.router.navigate(environment.landingLogin);
  }

  registerUser(value: User) {
    console.log(environment.host);
    return this.httpClient.post(environment.host + '/v1/authentication/register/', value, {
      observe: 'body',  // can be 'response' to return full response like headers, 'events'
      responseType: 'json', // 'blob' for downloading a file, 'arraybuffer' if you want to  buffer some data, 'text' for string
      headers: new HttpHeaders(),  // this gives you a HTTP header's object configuration so that the client can use it
    }).subscribe(
      (response: User) => {
        this.getToken(response.token);
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

  loginUser(value: User) {
    return this.httpClient.post(environment.host + '/v1/authentication/login/', value).subscribe(
      (response: User) => {
        this.getToken(response.token);
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

  isAuthenticated() {
    // console.log(this.token);
    return this.token != null;
  }

  logoutUser() {
    this.token = null;
    localStorage.removeItem('token');
    return this.router.navigate(['/']);

  }
}
