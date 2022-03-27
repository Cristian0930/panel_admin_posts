import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserRequest, UserRequestLogin } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://whispering-wildwood-32923.herokuapp.com/api/';

  constructor(private _http: HttpClient, private router: Router) { }

  signUp(user: UserRequest) {
    return this._http.post<any>(`${this.url}register`, user);
  }

  signIn(user: UserRequestLogin) {
    return this._http.post<any>(`${this.url}login`, user);
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
