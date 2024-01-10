import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {Coupon} from "../coupon";
import {PermissionService} from "../permission.service";
import {CouponService} from "../coupon.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-coupon-management',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    MatFormFieldModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    NgForOf,
    ReactiveFormsModule
  ],
  providers: [CouponService, PermissionService],
  templateUrl: './coupon-management.component.html',
  styleUrl: './coupon-management.component.sass'
})
export class CouponManagementComponent implements OnInit {
  coupons: Coupon[] = []
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  newCouponForm: FormGroup;

  constructor(private fb: FormBuilder, private couponService: CouponService, private permissionService: PermissionService) {
    this.newCouponForm = this.fb.group({
      code: ['', Validators.required],
      discount: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.getCoupons()
  }

  deleteCoupon(coupon: Coupon) {
    this.couponService.deleteCoupon(coupon.code, this.permissionService.getToken()).subscribe(_ => {
      this.getCoupons()
    })
  }

  submitNewCouponForm() {
    const coupon: Coupon = {
      code: this.newCouponForm.value.code,
      discountAmount: this.newCouponForm.value.discount,
    }
    this.couponService.createCoupon(coupon, this.permissionService.getToken()).subscribe(_ => {
      this.getCoupons()
    })
  }

  getCoupons() {
    this.couponService.getAllCoupons(this.permissionService.getToken()).subscribe(coupons => {
      this.coupons = coupons
    })
  }
}
