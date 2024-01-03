import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    MatDialogActions,
    MatButtonModule,
    MatDialogTitle
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.sass'
})
export class CategoryFormComponent {
  category: string;

  constructor(
    public dialogRef: MatDialogRef<CategoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { action: string; category?: string }
  ) {
    this.category = data.category || '';
  }

  onSaveClick(): void {
    this.dialogRef.close(this.category);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
