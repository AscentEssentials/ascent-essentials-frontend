import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {ProductComponent} from "./product/product.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {ProductsManagementComponent} from "./products-management/products-management.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {CategoryProductsComponent} from "./category-products/category-products.component";
import {SubcategoryProductsComponent} from "./subcategory-products/subcategory-products.component";
import {SearchProductsComponent} from "./search-products/search-products.component";
import {CategoriesManagementComponent} from "./categories-management/categories-management.component";
import {OrdersManagementComponent} from "./orders-management/orders-management.component";
import {UserAccountComponent} from "./user-account/user-account.component";
import {isUserCustomer, isUserLogged, isUserSupplier} from "./user-permission.guard";
import {CouponManagementComponent} from "./coupon-management/coupon-management.component";

export const routes: Routes = [
  {
    path: 'user',
    canActivate: [isUserLogged],
    children: [
      {
        path: 'account',
        component: UserAccountComponent,
        title: 'Account',
      },
      {
        path: 'cart',
        component: CartComponent,
        title: 'Cart',
        canActivate: [isUserCustomer],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        title: 'Checkout',
        canActivate: [isUserCustomer],
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        title: 'Notifications',
      },
    ]
  },
  {
    path: 'login',
    component: UserLoginComponent,
    title: 'Log In',
  },
  {
    path: 'products',
    children: [
      {
        path: 'category/:categoryId',
        component: CategoryProductsComponent,
        title: 'Products'
      },
      {
        path: 'subcategory/:subcategoryId',
        component: SubcategoryProductsComponent,
        title: 'Products'
      },
      {
        path: 'search/:query',
        component: SearchProductsComponent,
        title: 'Products'
      },
      {
        path: 'management',
        component: ProductsManagementComponent,
        title: 'Products Management',
        canActivate: [isUserSupplier],
      },
    ]
  },
  {
    path: 'product',
    children: [
      {
        path: 'new',
        component: NewProductComponent,
        title: 'New Product',
        canActivate: [isUserSupplier],
      },
      {
        path: ':productId',
        component: ProductComponent,
        title: 'Product',
      },
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: 'management',
        component: CategoriesManagementComponent,
        title: 'Categories Management',
        canActivate: [isUserSupplier],
      },
    ]
  },
  {
    path: 'orders',
    children: [
      {
        path: 'management',
        component: OrdersManagementComponent,
        title: 'Orders Management',
        canActivate: [isUserSupplier],
      },
    ]
  },
  {
    path: 'coupons',
    children: [
      {
        path: 'management',
        component: CouponManagementComponent,
        title: 'Coupons Management',
        canActivate: [isUserSupplier],
      },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Page'
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
