import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-supplier-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './supplier-login.component.html',
  styleUrl: './supplier-login.component.sass'
})
export class SupplierLoginComponent {
  login() {
    console.log('Supplier login clicked!')
  }
}
