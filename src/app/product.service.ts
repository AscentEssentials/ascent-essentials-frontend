import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product, ProductResponse} from "./product";
import {Token} from "./user";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`${this.apiUrl}/products`);
  }

  getProductsByCategory(subcategoryId: string): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`${this.apiUrl}/products/category/${subcategoryId}`);
  }

  getProductsBySubcategory(categoryId: string): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`${this.apiUrl}/products/subcategory/${categoryId}`);
  }

  getProductsByQuery(query: string): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`${this.apiUrl}/products/search?query=${query}`);
  }

  getProductById(productId: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.apiUrl}/product/${productId}`);
  }

  getProductImage(imageName: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/product/image/${imageName}`)
  }

  createProduct(product: Product, token: Token): Observable<Object> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.post(`${this.apiUrl}/product`, product, {headers});
  }

  deleteProductById(productId: string, token: Token): Observable<Object> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.delete(`${this.apiUrl}/product/${productId}`, {headers});
  }
}
