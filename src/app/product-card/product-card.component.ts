import {Component, Input} from '@angular/core';
import {Product} from "../product";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.sass'
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
}
