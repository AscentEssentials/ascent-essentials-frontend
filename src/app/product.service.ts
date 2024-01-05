import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProductsByCategory(subcategoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products/category/${subcategoryId}`);
  }

  getProductsBySubcategory(categoryId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products/subcategory/${categoryId}`);
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/product/${productId}`);
  }

  getProductImage(imageName: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/product/image/${imageName}`)
  }

  createProduct(productData: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/product`, productData);
  }

  updateProduct(productId: string, productData: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/product/${productId}`, productData);
  }

  deleteProductById(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/product/${productId}`);
  }
}
