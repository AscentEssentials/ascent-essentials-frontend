import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {Subcategory} from "../subcategory";
import {CategoryService} from "../category.service";
import {PermissionService} from "../permission.service";

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
  categoryForm: FormGroup;
  existingSubcategories: Subcategory[] = []

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private permissionService: PermissionService) {
    this.categoryForm = this.fb.group({
      categoryId: ['', Validators.required],
      newName: ['', Validators.required],
      newDescription: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getSubcategories()
  }

  getSubcategories() {
    this.categoryService.getAllSubcategories().subscribe(subcategories => {
      this.existingSubcategories = subcategories
    })
  }

  submitForm() {
    const newName: string = this.categoryForm.value.newName
    const newDescription: string = this.categoryForm.value.newDescription
    const selectedSubcategoryId: string = this.categoryForm.value.categoryId
    const selectedSubcategory = this.existingSubcategories.find(subcategory => subcategory._id == selectedSubcategoryId)!!
    const newSubcategory: Subcategory = {
      _id: selectedSubcategory._id,
      categoryId: selectedSubcategory?.categoryId,
      name: newName,
      description: newDescription
    }
    this.categoryService.editSubcategory(newSubcategory, this.permissionService.getToken().token).subscribe(_ => {
      this.getSubcategories()
    })
  }
}
