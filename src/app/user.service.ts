import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Token, User} from "./user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/register`, user)
  }

  loginUser(credentials: { email: string, password: string }): Observable<Token> {
    return this.http.post<Token>(`${this.apiUrl}/login`, credentials)
  }

  getUserDetails(token: string): Observable<User> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get<User>(`${this.apiUrl}/user`, {headers})
  }
}
