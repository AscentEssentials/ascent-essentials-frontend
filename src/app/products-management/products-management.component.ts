import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {Product} from "../product";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RouterLink} from "@angular/router";

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
  templateUrl: './products-management.component.html',
  styleUrl: './products-management.component.sass'
})
export class ProductsManagementComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'brand', 'actions'];
  products: Product[] = []

  searchTerm: string = '';
  filteredProducts: MatTableDataSource<Product> = new MatTableDataSource(this.products);

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}

  deleteProduct(product: Product): void {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.filteredProducts.data = [...this.products];
      this.snackBar.open('Product deleted successfully', 'OK', { duration: 2000 });
    } else {
      this.snackBar.open('Error deleting product', 'OK', { duration: 2000 });
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.filteredProducts.paginator = this.paginator;
  }

  search(): void {
    this.filteredProducts.data = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
