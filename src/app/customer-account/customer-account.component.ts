import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {UserAccountComponent} from "../user-account/user-account.component";
import {OrderResponse} from "../order";
import {OrderService} from "../order.service";
import {PermissionService} from "../permission.service";

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
  providers: [OrderService, PermissionService],
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.sass'
})
export class CustomerAccountComponent implements OnInit {
  orders: OrderResponse[] = []
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  constructor(private orderService: OrderService, private permissionService: PermissionService) {
  }

  ngOnInit(): void {
    this.orderService.getCustomerOrders(this.permissionService.getToken()).subscribe(orders => {
      this.orders = orders
    })
  }
}
