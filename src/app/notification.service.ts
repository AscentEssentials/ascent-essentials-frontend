import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Token} from "./user";
import {Observable} from "rxjs";
import {NotificationResponse} from "./notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getCustomerNotifications(token: Token): Observable<NotificationResponse[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.get<NotificationResponse[]>(`${this.apiUrl}/notifications`, {headers})
  }

  getSupplierNotifications(token: Token): Observable<NotificationResponse[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.get<NotificationResponse[]>(`${this.apiUrl}/admin/notifications`, {headers})
  }

  deleteCustomerNotification(notificationId: string, token: Token): Observable<Object> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.delete(`${this.apiUrl}/notifications/${notificationId}`,{headers})
  }

  deleteSupplierNotification(notificationId: string, token: Token): Observable<Object> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token.token}`)
    return this.http.delete(`${this.apiUrl}/admin/notifications/${notificationId}`,{headers})
  }
}
