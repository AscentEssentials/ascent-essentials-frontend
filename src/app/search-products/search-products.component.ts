import {Component, OnInit} from '@angular/core';
import {ProductsComponent} from "../products/products.component";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../product";

@Component({
  selector: 'app-search-products',
  standalone: true,
  imports: [
    ProductsComponent,
    HttpClientModule,
  ],
  providers: [ProductService],
  templateUrl: './search-products.component.html',
  styleUrl: './search-products.component.sass'
})
export class SearchProductsComponent implements OnInit {
  query: string = ""
  products: Product[] = []

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params['query']
      this.productService.getProductsByQuery(this.query).subscribe(products =>{
        this.products = products
      })
    })
  }
}
