import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe, NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Product} from "../product";
import {ObjectId} from "mongodb";

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

  product: Product = {
    id: new ObjectId(),
    name: "Product Name",
    brand: "Brand Name",
    price: 99.99,
    subCategory: {
      id: new ObjectId(),
      name: "subcategory",
      description: "description",
      parentCategory: {
        id: new ObjectId(),
        name: "category",
        description: "description"
      },
    },
    description: "Product Description",
    technicalSpecifications: new Map([
      ["spec1", "value1"],
      ["spec2", "value2"],
    ]),
    quantity: 10,
    images: ["image1.jpg", "image2.jpg"],
  }

  currentImage: string = "../../assets/images/placeholder.jpg"

  constructor(private snackBar: MatSnackBar) {}

  changeImage(image: string) {
    this.currentImage = image;
  }

  addToCart() {
    // Implement your logic for adding to the cart here
    const message = `${this.product.quantity} ${this.product.brand} ${this.product.name}(s) added to the cart.`;

    this.snackBar.open(message, 'Close', {
      duration: 5000,
      verticalPosition: 'bottom',
      panelClass: ['custom-snackbar']
    });
  }
}
