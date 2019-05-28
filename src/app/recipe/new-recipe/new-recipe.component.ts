import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe-list-edit/recipe-item/recipe.model';
import { SelectedRecipe } from 'src/app/services/selected-recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  recipeName:string;
  recipeDescription:string;
  recipeImage:string;
  recipeIngredients:Ingredient[] = [];


  constructor(private recipeServ:SelectedRecipe) { }

  ngOnInit() {
  }

  createRecipe(){
    if(this.recipeName && this.recipeImage && this.recipeDescription && this.recipeIngredients.length > 0){
      this.recipeServ.recipes.push(new Recipe(this.recipeName, this.recipeDescription
        ,this.recipeImage, this.recipeIngredients));

        this.recipeDescription="";
        this.recipeImage="";
        this.recipeName="";
        this.recipeIngredients = [];
    }
    
  }

  addIngredient(name:string, amount:number){
    if(name && amount)
    this.recipeIngredients.push(new Ingredient(name,amount));
  }

  removeIngredient(i:number){
    this.recipeIngredients.splice(i,1);
  }

}
