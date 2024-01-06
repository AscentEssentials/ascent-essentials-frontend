import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {CustomerAccountComponent} from "./customer-account/customer-account.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {ProductComponent} from "./product/product.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {ProductsManagementComponent} from "./products-management/products-management.component";
import {ProductManagementComponent} from "./product-management/product-management.component";
import {CategoryProductsComponent} from "./category-products/category-products.component";
import {SubcategoryProductsComponent} from "./subcategory-products/subcategory-products.component";
import {SearchProductsComponent} from "./search-products/search-products.component";
import {SupplierAccountComponent} from "./supplier-account/supplier-account.component";
import {CategoriesManagementComponent} from "./categories-management/categories-management.component";
import {OrdersManagementComponent} from "./orders-management/orders-management.component";

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
    path: 'user-login',
    component: UserLoginComponent,
    title: 'Log In'
  },
  {
    path: 'product/:productId',
    component: ProductComponent,
    title: 'Product'
  },
  {
    path: 'products/category/:categoryId',
    component: CategoryProductsComponent,
    title: 'Products'
  },
  {
    path: 'products/subcategory/:subcategoryId',
    component: SubcategoryProductsComponent,
    title: 'Products'
  },
  {
    path: 'products/search/:query',
    component: SearchProductsComponent,
    title: 'Products'
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    title: 'Notifications'
  },
  {
    path: 'products-management',
    component: ProductsManagementComponent,
    title: 'Products Management'
  },
  {
    path: 'categories-management',
    component: CategoriesManagementComponent,
    title: 'Categories Management'
  },
  {
    path: 'orders-management',
    component: OrdersManagementComponent,
    title: 'Orders Management'
  },
  {
    path: 'product-management',
    component: ProductManagementComponent,
    title: 'Product Management'
  },
  {
    path: 'supplier-account',
    component: SupplierAccountComponent,
    title: 'Account'
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
