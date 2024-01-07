import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {ProductResponse} from "../product";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogActions,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.sass'
})
export class ProductManagementComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      // Add more form controls for other product properties
    });
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      this.snackBar.open('Product saved successfully', 'OK', { duration: 2000 });
      this.router.navigate(['/products/management'])
    } else {
      this.snackBar.open('Please fill in all required fields', 'OK', { duration: 2000 });
    }
  }
}
