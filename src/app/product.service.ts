import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.apiUrl

  constructor() { }
}
