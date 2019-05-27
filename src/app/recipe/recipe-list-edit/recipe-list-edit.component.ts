import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe-item/recipe.model'; 
import { SelectedRecipe } from 'src/app/services/selected-recipe.service';

@Component({
  selector: 'app-recipe-list-edit',
  templateUrl: './recipe-list-edit.component.html',
  styleUrls: ['./recipe-list-edit.component.css']
})
export class RecipeListEditComponent implements OnInit {
  
  constructor(private recipeServices:SelectedRecipe) {
    
 }

  ngOnInit() {
  }
 
}
