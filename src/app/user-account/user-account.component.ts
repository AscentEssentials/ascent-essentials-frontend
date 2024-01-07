import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {User} from "../user";
import {UserService} from "../user.service";
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {CustomerAccountComponent} from "../customer-account/customer-account.component";
import {SupplierAccountComponent} from "../supplier-account/supplier-account.component";

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    CustomerAccountComponent,
    SupplierAccountComponent,
    NgIf,
  ],
  providers: [UserService],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.sass'
})
export class UserAccountComponent implements OnInit {
  user?: User

  constructor(private router: Router, private userService: UserService, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.userService.getUserDetails(this.cookieService.get("accessToken")).subscribe(user => {
      this.user = user
    })
  }

  logout() {
    this.cookieService.delete("accessToken")
    this.cookieService.delete("isAdmin")
    this.router.navigate(["/home"])
  }
}
