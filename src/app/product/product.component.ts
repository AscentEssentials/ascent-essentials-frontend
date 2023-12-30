import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe, NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  productName: string = "Kataki";
  productBrand: string = "La Sportiva";
  productImages: string[] = ["../../assets/images/placeholder.jpg", "../../assets/images/placeholder.jpg"];
  productDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
  productPrice: number = 29.90;
  isAvailable: boolean = true;
  selectedQuantity: number = 1;
  currentImage: string = "../../assets/images/placeholder.jpg";

  constructor(private snackBar: MatSnackBar) {}

  changeImage(image: string) {
    this.currentImage = image;
  }

  addToCart() {
    // Implement your logic for adding to the cart here
    const message = `${this.selectedQuantity} ${this.productBrand} ${this.productName}(s) added to the cart.`;

    this.snackBar.open(message, 'Close', {
      duration: 5000,
      verticalPosition: 'bottom',
      panelClass: ['custom-snackbar']
    });
  }
}
