import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  url = environment.apiUrl

  constructor() { }
}
