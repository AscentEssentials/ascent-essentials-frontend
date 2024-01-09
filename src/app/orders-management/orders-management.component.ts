import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {OrderService} from "../order.service";
import {PermissionService} from "../permission.service";
import {OrderResponse} from "../order";

@Component({
  selector: 'app-orders-management',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [OrderService, PermissionService],
  templateUrl: './orders-management.component.html',
  styleUrl: './orders-management.component.sass'
})
export class OrdersManagementComponent implements OnInit {
  orders: OrderResponse[] = []
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  constructor(private orderService: OrderService, private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.orderService.getAllOrders(this.permissionService.getToken()).subscribe(orders => {
      this.orders = orders.filter(o => o.status.toLowerCase() != "arrived")
    })
  }

  onStatusChange(order: OrderResponse): void {
    this.orderService.editOrderStatus(order._id, order.status, this.permissionService.getToken()).subscribe()
  }
}
