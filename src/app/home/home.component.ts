import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {HomeCard} from "../home-card";
import {HomeCardComponent} from "../home-card/home-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    MatCardModule,
    NgOptimizedImage,
    NgForOf,
    HomeCardComponent
  ],
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  cards: HomeCard[] = [
    {
      imagePath: '../../assets/images/ropes.jpg',
      imageDescription: "ROPES",
      text: "ROPES",
      isWide: true
    },
    {
      imagePath: '../../assets/images/climbing_shoes.jpg',
      imageDescription: "CLIMBING SHOES",
      text: "CLIMBING SHOES",
      isWide: true
    },
    {
      imagePath: '../../assets/images/clothing.jpg',
      imageDescription: "CLOTHING",
      text: "CLOTHING",
      isWide: true
    },
    {
      imagePath: '../../assets/images/harnesses.jpg',
      imageDescription: "HARNESSES",
      text: "HARNESSES",
      isWide: true
    },
  ]
}
