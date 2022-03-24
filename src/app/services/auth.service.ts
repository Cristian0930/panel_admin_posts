import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRequest } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://127.0.0.1:8000/api/';

  constructor(private _http: HttpClient) { }

  signUp(user: UserRequest) {
    return this._http.post<any>(`${this.url}register`, user);
  }
}
