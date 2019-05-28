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
  indexOfRecipe: number=0;
  @Input()
  routePage: number;

  @Input()
  recipe: Recipe;
 

  constructor(private currentRecipe: SelectedRecipe,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
   
  }

}
