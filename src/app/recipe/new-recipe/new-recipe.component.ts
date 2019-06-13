import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe-list-edit/recipe-item/recipe.model';
import { SelectedRecipe } from 'src/app/services/selected-recipe.service';
import { NgForm, NgModel } from '@angular/forms';
import { HttpRecipe } from 'src/app/services/http-recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  @ViewChild('newForm')
  newForm: NgForm;

  @ViewChild('nameInput')
  nameInput: NgModel

  newRecipe: Recipe;
  newRecipeIngredients: Ingredient[] = [];
  noIngredient: boolean = false;
  successMessage: string = '';


  constructor(private recipeServ: SelectedRecipe, private httpRecipes: HttpRecipe) { }

  ngOnInit() {
  }



  addIngredient(ingredientInput: NgModel, ingredientAmountInput: NgModel) {
    if (ingredientInput.value &&
      ingredientAmountInput.value &&
      ingredientAmountInput.value > 0) {
      this.newRecipeIngredients.push(new Ingredient(ingredientInput.value, ingredientAmountInput.value));
      ingredientInput.reset();
      ingredientAmountInput.reset('1');
    }

  }


  removeIngredient(i: number) {
    this.newRecipeIngredients.splice(i, 1);
  }

  onSubmit() {


    if (this.newRecipeIngredients.length < 1) {
      this.noIngredient = true;
    } else {
      this.noIngredient = false;

      this.httpRecipes.postRecipe(this.extractRecipe()).subscribe(
        () => {
          this.successMessage = "Recipe has been created successfully";
          setInterval(() => {
            this.successMessage = null;
          }, 5000)
          this.httpRecipes.refreshStaticRecipes();
        }
      );

      this.newForm.reset();
      this.newRecipeIngredients = [];

    }
  }

  extractRecipe(): Recipe {
    let recipe: Recipe = new Recipe(null, null, null, null);
    recipe.name = this.newForm.value.name;
    recipe.imagePath = this.newForm.value.image;
    recipe.description = this.newForm.value.description;
    recipe.ingredients = this.newRecipeIngredients;

    return recipe;
  }

}
