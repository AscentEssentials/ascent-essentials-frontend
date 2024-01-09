import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cart} from "./cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getCart(token: string): Observable<Cart>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get<Cart>(`${this.apiUrl}/cart`, {headers})
  }

  addProductToCart(productId: string, token: string): Observable<Object> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.post(`${this.apiUrl}/cart/add`, {productId: productId},{headers})
  }

  updateProductQuantity(productId: string, quantity: number, token: string): Observable<Object> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.put(`${this.apiUrl}/cart/update`, {productId: productId, quantity: quantity},{headers})
  }

  removeProduct(productId: string, token: string): Observable<Object> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.delete(`${this.apiUrl}/cart/remove?productId=${productId}`,{headers})
  }
}
