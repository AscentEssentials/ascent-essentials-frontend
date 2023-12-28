import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    MatListModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

}
