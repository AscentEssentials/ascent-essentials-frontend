import { Component } from '@angular/core';
import {Product} from "../product";
import {ProductCardComponent} from "../product-card/product-card.component";
import {NgForOf} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgForOf,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
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
  ]

  filteredProducts: Product[]
  priceFilterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.priceFilterForm = this.formBuilder.group({
      minPrice: [0],
      maxPrice: [100],
    });
    this.filteredProducts = [...this.products]
  }

  applyFilter() {
    const minPrice = this.priceFilterForm.value.minPrice;
    const maxPrice = this.priceFilterForm.value.maxPrice;
    this.filteredProducts = this.products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  }
}
