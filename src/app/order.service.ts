import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {NewOrder} from "./order";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Token} from "./user";
import {Observable} from "rxjs";

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
}
