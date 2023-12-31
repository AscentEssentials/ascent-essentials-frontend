import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.sass'
})
export class CheckoutComponent {
  executeOrder() {
    console.log('Order Executed!');
  }
}
