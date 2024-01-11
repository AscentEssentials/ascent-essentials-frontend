import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe, NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProductResponse} from "../product";
import {HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {CartService} from "../cart.service";
import {PermissionService} from "../permission.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatButtonModule,
    NgClass,
    FormsModule,
    CurrencyPipe,
    NgForOf,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [ProductService, CartService, PermissionService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.sass'
})
export class ProductComponent implements OnInit {
  product?: ProductResponse
  productId?: string
  currentImage: string = "../../assets/images/placeholder.jpg"
  quantity: number = 1
  apiUrl = environment.apiUrl

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private permissionService: PermissionService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.productId = params['productId']
        this.productService.getProductById(this.productId!).subscribe(product => {
          this.product = product
          this.currentImage = `${this.apiUrl}/product/image/${product.images[0]}`
          }
        )
      }
    )
  }

  changeImage(image: string) {
    this.currentImage = `${this.apiUrl}/product/image/${image}`
  }

  addToCart() {
    this.cartService.addProductToCart(this.productId!, this.quantity, this.permissionService.getToken().token).subscribe(_ => {
      const message = `${this.product!.brand} ${this.product!.name}(s) added to the cart.`
      this.snackBar.open(message, 'Close', {
        duration: 5000,
        verticalPosition: 'bottom',
        panelClass: ['custom-snackbar']
      })
    })
  }
}
