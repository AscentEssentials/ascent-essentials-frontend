import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@Component({
  selector: 'app-customer-account',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.sass'
})
export class CustomerAccountComponent {
  name: string = 'John';
  surname: string = 'Doe';
  email: string = 'john.doe@example.com';
  address: string = '123 Main Street';
  number: string = 'Apt 4B';
  zip: string = '12345';
  phoneNumber: string = '+1 (555) 123-4567';
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
}
