import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = environment.apiUrl

  constructor() { }
}
