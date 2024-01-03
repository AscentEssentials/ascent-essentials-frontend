import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = environment.apiUrl

  constructor() { }
}
