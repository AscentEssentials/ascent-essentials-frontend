import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {ProductResponse} from "../product";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RouterLink} from "@angular/router";
import {ProductService} from "../product.service";
import {PermissionService} from "../permission.service";

@Component({
  selector: 'app-products-management',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,
    RouterLink
  ],
  providers: [ProductService, PermissionService],
  templateUrl: './products-management.component.html',
  styleUrl: './products-management.component.sass'
})
export class ProductsManagementComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator
  displayedColumns: string[] = ['name', 'brand', 'actions']
  products: ProductResponse[] = []
  searchTerm: string = '';
  filteredProducts: MatTableDataSource<ProductResponse> = new MatTableDataSource(this.products);

  constructor(private snackBar: MatSnackBar, private productService: ProductService, private permissionService: PermissionService) {}

  deleteProduct(product: ProductResponse): void {
    this.productService.deleteProductById(product._id, this.permissionService.getToken()).subscribe(_ => {
      this.snackBar.open('Product deleted successfully', 'OK', { duration: 2000 });
      this.search()
    })
  }

  ngAfterViewInit() {
    this.filteredProducts.paginator = this.paginator;
  }

  search(): void {
    this.productService.getProductsByQuery(this.searchTerm).subscribe(products => {
      this.products = products
      this.filteredProducts.data = this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    })
  }
}
