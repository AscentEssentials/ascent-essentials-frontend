import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Token} from "./user";
import {Observable} from "rxjs";
import {Coupon} from "./coupon";

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getAllCoupons(token: Token): Observable<Coupon[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.get<Coupon[]>(`${this.apiUrl}/admin/coupons`, {headers})
  }

  createCoupon(coupon: Coupon, token: Token): Observable<Object>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.post(`${this.apiUrl}/admin/coupon`, coupon, {headers})
  }

  deleteCoupon(couponCode: string, token: Token): Observable<Object> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.delete(`${this.apiUrl}/admin/coupon/${couponCode}`,{headers})
  }
}
