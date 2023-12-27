import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {HomeCard} from "../home-card";

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.sass'
})
export class HomeCardComponent {
  @Input() card!: HomeCard;
}
