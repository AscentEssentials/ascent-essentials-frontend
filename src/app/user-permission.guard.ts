import { CanActivateFn } from '@angular/router';
import {UserService} from "./user.service";
import {Inject} from "@angular/core";

export const isUserLogged: CanActivateFn = (route, state) => {
  return Inject(UserService).isUserLogged()
}

export const isUserSupplier: CanActivateFn = (route, state) => {
  return Inject(UserService).isUserSupplier()
}

export const isUserCustomer: CanActivateFn = (route, state) => {
  return !Inject(UserService).isUserSupplier()
}
