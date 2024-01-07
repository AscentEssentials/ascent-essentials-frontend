import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {SubcategoryResponse} from "../subcategory";
import {CategoryService} from "../category.service";
import {PermissionService} from "../permission.service";
import {Category} from "../category";

@Component({
  selector: 'app-categories-management',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [CategoryService, PermissionService],
  templateUrl: './categories-management.component.html',
  styleUrl: './categories-management.component.sass'
})
export class CategoriesManagementComponent implements OnInit {
  editCategoryForm: FormGroup;
  newCategoryForm: FormGroup;
  existingSubcategories: SubcategoryResponse[] = []
  existingCategories: Category[] = [];

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private permissionService: PermissionService) {
    this.editCategoryForm = this.fb.group({
      categoryId: ['', Validators.required],
      newName: ['', Validators.required],
      newDescription: ['', Validators.required],
    })
    this.newCategoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      parentCategoryId: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories() {
    this.categoryService.getAllSubcategories().subscribe(subcategories => {
      this.existingSubcategories = subcategories
    })
    this.categoryService.getAllCategories().subscribe(categories => {
      this.existingCategories = categories
    })
  }

  submitEditCategoryForm() {
    const newName: string = this.editCategoryForm.value.newName
    const newDescription: string = this.editCategoryForm.value.newDescription
    const selectedSubcategoryId: string = this.editCategoryForm.value.categoryId
    const selectedSubcategory = this.existingSubcategories.find(subcategory => subcategory._id == selectedSubcategoryId)!!
    const newSubcategory: SubcategoryResponse = {
      _id: selectedSubcategory._id,
      categoryId: selectedSubcategory?.categoryId,
      name: newName,
      description: newDescription
    }
    this.categoryService.editSubcategory(newSubcategory, this.permissionService.getToken().token).subscribe(_ => {
      this.loadCategories()
    })
  }

  submitNewCategoryForm() {
    const name: string = this.newCategoryForm.value.name
    const description: string = this.newCategoryForm.value.description
    const parentCategoryId: string = this.newCategoryForm.value.parentCategoryId
    this.categoryService.createSubcategory(
      {
        name: name,
        description: description,
        categoryId: parentCategoryId,
      },
      this.permissionService.getToken().token
    ).subscribe(_ => {
      this.loadCategories()
    })
  }
}
