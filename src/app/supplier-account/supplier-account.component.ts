import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-supplier-account',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './supplier-account.component.html',
  styleUrl: './supplier-account.component.sass'
})
export class SupplierAccountComponent {

}
