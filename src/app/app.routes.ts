import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChartComponent} from "./chart/chart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {CustomerAccountComponent} from "./customer-account/customer-account.component";
import {CustomerSignupComponent} from "./customer-signup/customer-signup.component";
import {CustomerLoginComponent} from "./customer-login/customer-login.component";
import {OrdersHistoryComponent} from "./orders-history/orders-history.component";
import {SupplierAccountComponent} from "./supplier-account/supplier-account.component";
import {SupplierLoginComponent} from "./supplier-login/supplier-login.component";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'chart',
    component: ChartComponent,
    title: 'Chart'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Checkout'
  },
  {
    path: 'customer-account',
    component: CustomerAccountComponent,
    title: 'Account'
  },
  {
    path: 'customer-signup',
    component: CustomerSignupComponent,
    title: 'Sign Up'
  },
  {
    path: 'customer-login',
    component: CustomerLoginComponent,
    title: 'Log In'
  },
  {
    path: 'orders-history',
    component: OrdersHistoryComponent,
    title: 'Orders History'
  },
  {
    path: 'supplier-account',
    component: SupplierAccountComponent,
    title: 'Account'
  },
  {
    path: 'supplier-login',
    component: SupplierLoginComponent,
    title: 'Log In'
  },
  {
    path: 'product',
    component: ProductComponent,
    title: 'Product'
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products'
  },
];
