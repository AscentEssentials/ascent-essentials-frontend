import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {UserService} from "../user.service";
import {HttpClientModule} from "@angular/common/http";
import {User} from "../user";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {UserAccountComponent} from "../user-account/user-account.component";

@Component({
  selector: 'app-customer-account',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatButtonModule,
    UserAccountComponent,
  ],
  providers: [UserService],
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.sass'
})
export class CustomerAccountComponent implements OnInit {
  customer?: User

  orders = [
    { orderNumber: '12345', date: new Date(), totalPrice: 39.98 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
    { orderNumber: '54321', date: new Date(), totalPrice: 55 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
    { orderNumber: '54321', date: new Date(), totalPrice: 59.99 },
  ];
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
  }
}
