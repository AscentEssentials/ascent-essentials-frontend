import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "../product.service";
import {ProductResponse} from "../product";
import {ProductsComponent} from "../products/products.component";

@Component({
  selector: 'app-subcategory-products',
  standalone: true,
  imports: [
    HttpClientModule,
    ProductsComponent,
  ],
  providers: [ProductService],
  templateUrl: './subcategory-products.component.html',
  styleUrl: './subcategory-products.component.sass'
})
export class SubcategoryProductsComponent implements OnInit {
  subcategoryId: string = ""
  products: ProductResponse[] = []

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.subcategoryId = params['subcategoryId']
      this.productService.getProductsBySubcategory(this.subcategoryId).subscribe(products => {
        this.products = products
      })
    })
  }
}
