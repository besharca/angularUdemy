import { Component, OnInit, Input, } from '@angular/core';
import { Recipe } from './recipe.model';
import { SelectedRecipe } from 'src/app/services/selected-recipe.service';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  indexOfRecipe: number;

  @Input()
  recipe: Recipe;
 

  constructor(private currentRecipe: SelectedRecipe,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.currentRecipe.recipes[this.router.snapshot.params['id']]) {
      this.currentRecipe.selectedRecipe = this.currentRecipe.recipes[this.router.snapshot.params['id']];
    } else {
      if (this.router.snapshot.params['id']) {
        this.currentRecipe.selectedRecipe = new Recipe("Resource not found",
          "404",
          "https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_960_720.jpg",
          [new Ingredient("Not Found", 404)]);
          this.currentRecipe.errorButtonDisable = true;
      }
    }
  }

  selectedItem() {
    this.currentRecipe.selectedRecipe = this.currentRecipe.recipes[this.indexOfRecipe];
    this.currentRecipe.errorButtonDisable = false;
    // ;
  }

}
