import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  apiUrl = environment.apiUrl

  constructor() { }
}
