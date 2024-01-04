import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe, NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Product} from "../product";
import {HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatButtonModule,
    NgClass,
    FormsModule,
    CurrencyPipe,
    NgForOf,
    HttpClientModule
  ],
  providers: [ProductService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass'
})
export class ProductComponent implements OnInit {
  product!: Product
  productId!: string

  currentImage: string = "../../assets/images/placeholder.jpg"

  constructor(private snackBar: MatSnackBar, private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.productId = params['productId']
        this.productService.getProductById(this.productId).subscribe(product =>
          this.product = product
        )
      }
    )
  }

  changeImage(image: string) {
    this.currentImage = image;
  }

  addToCart() {
    const message = `${this.product.quantity} ${this.product.brand} ${this.product.name}(s) added to the cart.`;

    this.snackBar.open(message, 'Close', {
      duration: 5000,
      verticalPosition: 'bottom',
      panelClass: ['custom-snackbar']
    });
  }
}
