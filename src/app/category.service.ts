import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Category, CategoryResponse} from "./category";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  getCategoryById(id: string): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(`${this.apiUrl}/category?id=${id}`);
  }

  createCategory(categoryData: Category): Observable<CategoryResponse> {
    return this.http.post<CategoryResponse>(`${this.apiUrl}/category`, categoryData);
  }
}
