import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductResponse} from "../product";
import {ProductCardComponent} from "../product-card/product-card.component";
import {NgForOf} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {SubcategoryResponse} from "../subcategory";
import {CategoryService} from "../category.service";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgForOf,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    RouterLink,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [CategoryService, ProductService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.sass'
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() products: ProductResponse[] = []
  filteredProducts: ProductResponse[]
  brands: string[] = []
  subcategories: SubcategoryResponse[] = []
  filterForm: FormGroup

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) {
    this.filterForm = this.formBuilder.group({
      minPrice: [0],
      maxPrice: [5000],
      subCategoryId: "",
      brand: "",
    });
    this.brands = this.products.map(p => p.brand)
    this.filteredProducts = [...this.products]
  }

  ngOnInit(): void {
    this.categoryService.getAllSubcategories().subscribe(subcategories =>{
      this.subcategories = subcategories
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredProducts = [...changes['products'].currentValue]
    this.brands = [...changes['products'].currentValue].map(p => p.brand)
  }

  applyFilters() {
    this.filteredProducts = [...this.products]
    const minPrice = this.filterForm.value.minPrice
    const maxPrice = this.filterForm.value.maxPrice
    const subcategoryId = this.filterForm.value.subCategoryId
    this.filteredProducts = this.products.filter(
      (product) => {
        return product.price >= minPrice
          && product.price <= maxPrice
          && product.subCategoryId == subcategoryId
      }
    )
  }
}
