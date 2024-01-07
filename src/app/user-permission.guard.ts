import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {PermissionService} from "./permission.service";

export const isUserLogged: CanActivateFn = (route, state) => {
  return inject(PermissionService).isUserLogged() ? true : inject(Router).createUrlTree(['/', 'login'])
}

export const isUserSupplier: CanActivateFn = (route, state) => {
  return inject(PermissionService).isUserSupplier()
}

export const isUserCustomer: CanActivateFn = (route, state) => {
  return inject(PermissionService).isUserCustomer()
}
