import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {PermissionService} from "./permission.service";

export const isUserLogged: CanActivateFn = (route, state) => {
  return inject(PermissionService).isUserLogged()
}

export const isUserSupplier: CanActivateFn = (route, state) => {
  return inject(PermissionService).isUserSupplier()
}

export const isUserCustomer: CanActivateFn = (route, state) => {
  return inject(PermissionService).isUserCustomer()
}
