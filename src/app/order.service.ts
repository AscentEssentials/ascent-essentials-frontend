import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Token} from "./user";
import {Observable} from "rxjs";
import {OrderResponse} from "./order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  createOrder(order: FormData, token: Token): Observable<Object>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.post(`${this.apiUrl}/order`, order, {headers});
  }

  getCustomerOrders(token: Token): Observable<OrderResponse[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.get<OrderResponse[]>(`${this.apiUrl}/orders`, {headers});
  }

  getAllOrders(token: Token): Observable<OrderResponse[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.get<OrderResponse[]>(`${this.apiUrl}/admin/orders`, {headers});
  }

  editOrderStatus(orderId: string, state: string, token: Token): Observable<Object> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.patch(`${this.apiUrl}/admin/orders/${orderId}/status`, {status: state},{headers})
  }
}
