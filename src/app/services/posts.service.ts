import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostRequest, PostResponse } from "../interfaces/post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  private url: string = 'http://whispering-wildwood-32923.herokuapp.com/api/';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}posts`);
  }

  getPost(id: number | undefined | string): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.url}posts/${id}`);
  }

  createPost(post: PostRequest): Observable<PostResponse> {
    return this.http.post<PostResponse>(`${this.url}posts`, post);
  }

  updatePost(id: number | undefined | string, post: PostRequest): Observable<PostResponse> {
    return this.http.put<PostResponse>(`${this.url}posts/${id}`, post);
  }

  deletePost(id: number | undefined | string): Observable<any> {
    return this.http.delete<any>(`${this.url}posts/${id}`);
  }
}
