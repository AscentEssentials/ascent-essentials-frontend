import {Component, OnInit} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatRadioModule,
    MatListModule,
    HttpClientModule,
  ],
  providers: [CategoryService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {
  climbingCategoryId: string = ""
  footwearCategoryId: string = ""
  clothingCategoryId: string = ""
  moreActivitiesCategoryId: string = ""
  query: string = ""

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      categories.forEach(category => {
        if(category.name.toLowerCase() == "climbing") {
          this.climbingCategoryId = category._id
        }
        if(category.name.toLowerCase() == "footwear") {
          this.footwearCategoryId = category._id
        }
        if(category.name.toLowerCase() == "clothing") {
          this.clothingCategoryId = category._id
        }
        if(category.name.toLowerCase() == "more activities") {
          this.moreActivitiesCategoryId = category._id
        }
      })
    })
  }
}
