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
      imageDescription: "Test",
      text: "Test",
      isWide: true
    },
    {
      imagePath: '../../assets/images/climbing_shoes.jpg',
      imageDescription: "Test",
      text: "Test",
      isWide: true
    },
    {
      imagePath: '../../assets/images/clothing.jpg',
      imageDescription: "Test",
      text: "Test",
      isWide: true
    },
    {
      imagePath: '../../assets/images/harnesses.jpg',
      imageDescription: "Test",
      text: "Test",
      isWide: true
    },
  ]
}
