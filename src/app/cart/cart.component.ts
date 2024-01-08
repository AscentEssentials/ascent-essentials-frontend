import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ProductResponse} from "../product";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CartService} from "../cart.service";
import {PermissionService} from "../permission.service";
import {Cart} from "../cart";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatTableModule,
    CurrencyPipe,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    MatPaginatorModule,
    NgForOf
  ],
  providers: [CartService, PermissionService, ProductService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass'
})
export class CartComponent implements OnInit {
  cartProducts: ProductResponse[] = [];
  cart!: Cart
  pageSizeOptions: number[] = [5, 10, 25, 50];

  constructor(
    private cartService: CartService,
    private permissionService: PermissionService,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.updateCart()
  }

  removeFromCart(item: ProductResponse) {
    this.cartService
      .removeProduct(item._id, this.permissionService.getToken().token)
      .subscribe(_ => {
        this.cartProducts = []
        this.updateCart()
      })
  }

  updateCart() {
    this.cartService.getCart(this.permissionService.getToken().token).subscribe( cart => {
      this.cart = cart
      this.productService
        .getProductsById(this.cart!.items.map(it => it.productId))
        .subscribe(products => {
          products.forEach(product => {
            this.cartProducts.push(
              {
                name: product.name,
                brand: product.brand,
                price: product.price,
                subCategoryId: product.subCategoryId,
                description: product.description,
                technicalSpecifications: product.technicalSpecifications,
                quantity: this.cart.items.find(item => item.productId == product._id)!.quantity,
                images: product.images,
                _id: product._id
              })
          })
        })
    })
  }

  checkout() {
    console.log('Checkout clicked! Implement checkout logic.');
  }
}
