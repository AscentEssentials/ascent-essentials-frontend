import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe, NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CartProduct} from "../cart-product";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatButtonModule,
    NgClass,
    FormsModule,
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass'
})
export class ProductComponent {

  product: CartProduct = {
    product: {
      name: "Kataki",
      brand: "La Sportiva",
      imagesPaths: ["../../assets/images/placeholder.jpg", "../../assets/images/placeholder.jpg"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      price: 29.90,
      isAvailable: true,
    },
    quantity: 1,
  }

  currentImage: string = "../../assets/images/placeholder.jpg"

  constructor(private snackBar: MatSnackBar) {}

  changeImage(image: string) {
    this.currentImage = image;
  }

  addToCart() {
    // Implement your logic for adding to the cart here
    const message = `${this.product.quantity} ${this.product.product.brand} ${this.product.product.name}(s) added to the cart.`;

    this.snackBar.open(message, 'Close', {
      duration: 5000,
      verticalPosition: 'bottom',
      panelClass: ['custom-snackbar']
    });
  }
}
