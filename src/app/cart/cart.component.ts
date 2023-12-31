import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {CurrencyPipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {Product} from "../product";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CartProduct} from "../cart-product";

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
  cartItems: CartProduct[] = [
    {
      product: {
        imagesPaths: ['../../assets/images/placeholder.jpg'],
        name: 'Product A',
        brand: 'Brand A',
        price: 19.99,
        description: 'Description for Product A',
        isAvailable: true,
      },
      quantity: 2
    },
    {
      product: {
        imagesPaths: ['../../assets/images/placeholder.jpg'],
        name: 'Product A',
        brand: 'Brand A',
        price: 19.99,
        description: 'Description for Product A',
        isAvailable: true,
      },
      quantity: 2
    },
    {
      product: {
        imagesPaths: ['../../assets/images/placeholder.jpg'],
        name: 'Product A',
        brand: 'Brand A',
        price: 19.99,
        description: 'Description for Product A',
        isAvailable: true,
      },
      quantity: 2
    },
  ];

  total: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  ngOnInit() {
    this.updateCartTotal();
  }

  updateCartTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  removeFromCart(item: CartProduct) {
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
