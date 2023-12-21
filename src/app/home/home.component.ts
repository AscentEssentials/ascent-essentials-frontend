import {Component} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {Tile} from "./Tile";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    MatGridListModule,
    NgForOf,
    NgOptimizedImage
  ],
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  tiles: Tile[] = [
    {cols: 2, rows: 6, imagePath: './assets/images/cordeo-hpd.jpg'},
    {cols: 1, rows: 10, imagePath: './assets/images/abbigliamento-hpm.jpg'},
    {cols: 1, rows: 10, imagePath: './assets/images/3scarpette_generatormid.jpg'},
    {cols: 2, rows: 6, imagePath: './assets/images/imbrago-hpd.jpg'},
  ];
}
