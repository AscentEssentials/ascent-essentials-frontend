import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Token} from "./user";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private cookieService: CookieService) { }

  registerPermission(token: Token, isAdmin: boolean){
    this.cookieService.set("accessToken", token.token)
    this.cookieService.set("isAdmin", `${isAdmin}`)
  }

  getToken(): Token {
    return {
      token: this.cookieService.get("accessToken")
    }
  }

  deletePermission() {
    this.cookieService.delete("accessToken")
    this.cookieService.delete("isAdmin")
  }

  isUserLogged(): boolean {
    return this.cookieService.check("accessToken")
  }

  isUserCustomer(): boolean {
    return "false" == this.cookieService.get("isAdmin")
  }

  isUserSupplier(): boolean {
    return "true" == this.cookieService.get("isAdmin")
  }
}
