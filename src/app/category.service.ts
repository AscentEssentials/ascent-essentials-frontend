import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Category} from "./category";
import {Observable} from "rxjs";
import {Subcategory, SubcategoryResponse} from "./subcategory";

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

  getAllSubcategories(): Observable<SubcategoryResponse[]> {
    return this.http.get<SubcategoryResponse[]>(`${this.apiUrl}/subcategories`);
  }

  getSubcategoryById(id: string): Observable<SubcategoryResponse> {
    return this.http.get<SubcategoryResponse>(`${this.apiUrl}/subcategory?id=${id}`);
  }

  createSubcategory(category: Subcategory, token: string): Observable<Object> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.post(`${this.apiUrl}/subcategory`, category, {headers});
  }

  editSubcategory(newSubcategory: SubcategoryResponse, token: string): Observable<Object> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.put(`${this.apiUrl}/subcategory/${newSubcategory._id}`, newSubcategory, {headers})
  }
}
