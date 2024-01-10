import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {OrderService} from "../order.service";
import {PermissionService} from "../permission.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NewOrder} from "../order";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [OrderService, PermissionService],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.sass'
})
export class CheckoutComponent {
  creditCardForm: FormGroup;
  couponForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private router: Router, private fb: FormBuilder, private orderService: OrderService, private permissionService: PermissionService) {
    this.creditCardForm = this.fb.group({
      creditCardNumber: ['', [Validators.required]],
      creditCardExpirationDate: ['', [Validators.required]],
      ccv: ['', [Validators.required]],
    });
    this.couponForm = this.fb.group({
      couponCode: ['']
    });
  }
  executeOrder() {
    const newOrder: NewOrder = {
      creditCardNumber: this.creditCardForm.value.creditCardNumber,
      creditCardExpirationDate: this.creditCardForm.value.creditCardExpirationDate,
      ccv: this.creditCardForm.value.ccv,
      couponCode: this.couponForm.value.couponCode
    }
    this.orderService.createOrder(newOrder, this.permissionService.getToken()).subscribe(_ => {
      this.router.navigate(["/user/cart"]).then(_ => {
        this.snackBar.open("Order executed!", 'Close', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['custom-snackbar']
        })
      })
    })
  }
}
