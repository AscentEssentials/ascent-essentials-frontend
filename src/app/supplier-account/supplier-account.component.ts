import { Component } from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-supplier-account',
  standalone: true,
  imports: [
    MatListModule,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './supplier-account.component.html',
  styleUrl: './supplier-account.component.sass'
})
export class SupplierAccountComponent {

}
