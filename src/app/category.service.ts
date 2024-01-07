import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Category} from "./category";
import {Observable} from "rxjs";
import {Subcategory} from "./subcategory";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/category?id=${id}`);
  }

  getAllSubcategories(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${this.apiUrl}/subcategories`);
  }

  getSubcategoryById(id: string): Observable<Subcategory> {
    return this.http.get<Subcategory>(`${this.apiUrl}/subcategory?id=${id}`);
  }

  createSubcategory(category: Subcategory): Observable<Object> {
    return this.http.post<Subcategory>(`${this.apiUrl}/subcategory`, category);
  }

  editSubcategory(id: string, newSubcategory: Subcategory): Observable<Object> {
    return this.http.put(`${this.apiUrl}/subcategory/${id}`, newSubcategory)
  }
}
