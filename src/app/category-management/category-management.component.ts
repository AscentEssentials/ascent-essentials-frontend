import {Component, OnInit, ViewChild} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {CategoryFormComponent} from "../category-form/category-form.component";

@Component({
  selector: 'app-category-management',
  standalone: true,
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        ReactiveFormsModule
    ],
  templateUrl: './category-management.component.html',
  styleUrl: './category-management.component.sass'
})
export class CategoryManagementComponent implements OnInit {
  displayedColumns: string[] = ['name', 'actions'];
  dataSource = new MatTableDataSource<string>([]);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // Fetch or initialize your categories
    this.dataSource.data = ['Category A', 'Category B', 'Category C'];
    this.dataSource.paginator = this.paginator;
  }

  editCategory(category: string): void {
    const dialogRef = this.dialog.open(CategoryFormComponent, {
      width: '400px',
      data: { action: 'edit', category },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.dataSource.data.indexOf(category);
        if (index !== -1) {
          this.dataSource.data[index] = result;
          this.dataSource._updateChangeSubscription(); // Refresh the table
          this.snackBar.open('Category updated successfully', 'OK', { duration: 2000 });
        }
      }
    });
  }

  addCategory(): void {
    const dialogRef = this.dialog.open(CategoryFormComponent, {
      width: '400px',
      data: { action: 'add' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource._updateChangeSubscription(); // Refresh the table
        this.snackBar.open('Category added successfully', 'OK', { duration: 2000 });
      }
    });
  }
}
