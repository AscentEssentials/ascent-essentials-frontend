import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ProductsComponent} from "../products/products.component";
import {ProductService} from "../product.service";
import {ProductResponse} from "../product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [
    HttpClientModule,
    ProductsComponent,
  ],
  providers: [ProductService],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.sass'
})
export class CategoryProductsComponent implements OnInit {
  categoryId: string = ""
  products: ProductResponse[] = []

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId']
      this.productService.getProductsByCategory(this.categoryId).subscribe(products => {
        this.products = products
      })
    });
  }
}
