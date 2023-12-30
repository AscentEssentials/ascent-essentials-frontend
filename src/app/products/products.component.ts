import { Component } from '@angular/core';
import {Product} from "../product";
import {ProductCardComponent} from "../product-card/product-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Product',
      imagePath: '../../assets/images/placeholder.jpg',
      price: 29.99,
    },
    {
      name: 'Product',
      imagePath: '../../assets/images/placeholder.jpg',
      price: 29.99,
    },
    {
      name: 'Product',
      imagePath: '../../assets/images/placeholder.jpg',
      price: 29.99,
    },
    {
      name: 'Product',
      imagePath: '../../assets/images/placeholder.jpg',
      price: 29.99,
    },
    {
      name: 'Product',
      imagePath: '../../assets/images/placeholder.jpg',
      price: 29.99,
    },
    {
      name: 'Product',
      imagePath: '../../assets/images/placeholder.jpg',
      price: 29.99,
    },
    {
      name: 'Product',
      imagePath: '../../assets/images/placeholder.jpg',
      price: 29.99,
    },
    {
      name: 'Product',
      imagePath: '../../assets/images/placeholder.jpg',
      price: 29.99,
    },
    {
      name: 'Product',
      imagePath: '../../assets/images/placeholder.jpg',
      price: 29.99,
    },
    {
      name: 'Product',
      imagePath: '../../assets/images/placeholder.jpg',
      price: 29.99,
    },
  ];
}
