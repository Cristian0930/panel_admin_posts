import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  private url: string = 'http://127.0.0.1:8000/api/';

  getPosts() {
    return this.http.get(`${this.url}posts`);
  }
}
