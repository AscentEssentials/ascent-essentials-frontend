import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {CustomerAccountComponent} from "./customer-account/customer-account.component";
import {CustomerLoginComponent} from "./customer-login/customer-login.component";
import {SupplierLoginComponent} from "./supplier-login/supplier-login.component";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductManagementComponent} from "./product-management/product-management.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart'
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
    path: 'customer-login',
    component: CustomerLoginComponent,
    title: 'Log In'
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
  {
    path: 'notifications',
    component: NotificationsComponent,
    title: 'Notifications'
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    title: 'Product List'
  },
  {
    path: 'product-management',
    component: ProductManagementComponent,
    title: 'Product Management'
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page not found'
  },
];
