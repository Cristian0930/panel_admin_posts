import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, CategoryRequest } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL: string = 'http://127.0.0.1:8000/api/'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}categories`);
  }

  createCategory(category: CategoryRequest): Observable<Category> {
    return this.http.post<Category>(`${this.BASE_URL}categories`, category);
  }

  getCategory(id: number | undefined | string): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}categories/${id}`);
  }

  updateCategory(id: number | undefined | string, category: CategoryRequest): Observable<Category> {
    return this.http.put<Category>(`${this.BASE_URL}categories/${id}`, category);
  }

  deleteCategory(id: number | undefined | string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}categories/${id}`);
  }
}
