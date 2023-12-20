import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    MatButtonModule,
    CurrencyPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  products: any[] = []; // Replace with your actual product data

  constructor() { }

  ngOnInit(): void {
    // Fetch or set your product data here
    this.products = [
      {
        name: 'Climbing Shoes',
        description: 'High-performance climbing shoes for all terrains.',
        price: 99.99
      },
      // Add more products as needed
    ];
  }
}
