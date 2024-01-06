import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

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
    MatIconModule
  ],
  templateUrl: './categories-management.component.html',
  styleUrl: './categories-management.component.sass'
})
export class CategoriesManagementComponent {
  categories: string[] = ['Category 1', 'Category 2', 'Category 3']; // Example categories
  newCategory: string = '';
  editingCategory: string = '';
  editedCategory: string = '';

  editCategory(category: string) {
    this.editingCategory = category;
    this.editedCategory = category;
  }

  submitEditForm() {
    // Update the category logic here
    const index = this.categories.indexOf(this.editingCategory);
    if (index !== -1) {
      this.categories[index] = this.editedCategory;
      // You can send a request to your backend to update the category
    }

    this.editingCategory = '';
    this.editedCategory = '';
  }

  submitAddForm() {
    // Add the category logic here
    if (this.newCategory.trim() !== '' && !this.categories.includes(this.newCategory)) {
      this.categories.push(this.newCategory);
      // You can send a request to your backend to add the category

      // Clear the input field
      this.newCategory = '';
    }
  }
}
