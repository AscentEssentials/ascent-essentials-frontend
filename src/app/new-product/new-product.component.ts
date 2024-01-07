import {Component, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {ProductService} from "../product.service";
import {PermissionService} from "../permission.service";
import {CategoryService} from "../category.service";
import {SubcategoryResponse} from "../subcategory";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogActions,
    MatButtonModule,
    ReactiveFormsModule,
    NgForOf,
    MatCardModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [ProductService, PermissionService, CategoryService],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.sass'
})
export class NewProductComponent implements OnInit {
  newProductForm: FormGroup
  selectedImages: File[] = []
  subcategories: SubcategoryResponse[] = []

  constructor(private fb: FormBuilder, private productService: ProductService, private permissionService: PermissionService, private categoryService: CategoryService) {
    this.newProductForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      subCategoryId: ['', Validators.required],
      description: ['', Validators.required],
      technicalSpecifications: this.fb.group({}),
      quantity: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.categoryService.getAllSubcategories().subscribe(subcategories => {
      this.subcategories = subcategories
    })
  }

  submitForm() {
    const formData = new FormData()
    formData.append('name', this.newProductForm.value.name)
    formData.append('brand', this.newProductForm.value.brand)
    formData.append('price', this.newProductForm.value.price)
    formData.append('subCategoryId', this.newProductForm.value.subCategoryId)
    formData.append('description', this.newProductForm.value.description)
    formData.append('quantity', this.newProductForm.value.quantity)
    formData.append('technicalSpecifications', '{}')
    if (this.selectedImages) {
      for (const image of this.selectedImages) {
        formData.append('images', image);
      }
    }
    this.productService.createProduct(formData, this.permissionService.getToken()).subscribe()
  }

  onFileSelected(event: any): void {
    this.selectedImages = event.target.files;
  }
}
