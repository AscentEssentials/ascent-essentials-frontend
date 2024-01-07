import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {CurrencyPipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ProductResponse} from "../product";
import {MatPaginatorModule} from "@angular/material/paginator";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatTableModule,
    CurrencyPipe,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    MatPaginatorModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass'
})
export class CartComponent implements OnInit {
  cartItems: ProductResponse[] = [];

  total: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  ngOnInit() {
    this.updateCartTotal();
  }

  updateCartTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  removeFromCart(item: ProductResponse) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.updateCartTotal();
    }
  }

  checkout() {
    // Implement your checkout logic here
    console.log('Checkout clicked! Implement your checkout logic.');
  }
}
