import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe, NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

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

  changeImage(image: string) {
    this.currentImage = image;
  }

  addToCart() {
    // Implement your logic for adding to the cart here
    console.log(`Added ${this.selectedQuantity} ${this.productName}(s) to the cart.`);
  }
}
