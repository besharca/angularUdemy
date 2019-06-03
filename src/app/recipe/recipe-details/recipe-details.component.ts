import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SelectedRecipe } from 'src/app/services/selected-recipe.service';
import { ShoppingServices } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe-list-edit/recipe-item/recipe.model';



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit, OnChanges {

  successMessage: string;
  indexOfRecipe: number;
  showButton:boolean = true;

  currentRecipe: Recipe;

  constructor(
    private recipeServ: SelectedRecipe, 
    private shopServ: ShoppingServices,
    private route: Router, 
    private activRouter: ActivatedRoute) 
    {}
 

  ngOnInit() { 

    this.indexOfRecipe = +this.activRouter.snapshot.params["id"];
    this.currentRecipe = this.recipeServ.recipes[this.indexOfRecipe];
    this.activRouter.params.subscribe((routeParams) => {
      this.indexOfRecipe = (+routeParams.id);
      this.currentRecipe = this.recipeServ.recipes[this.indexOfRecipe];
      this.showButton = true;
    })

    if (this.recipeServ.recipes.length - 1 < this.indexOfRecipe
      || this.indexOfRecipe < 0
      || isNaN(+this.activRouter.snapshot.params["id"])) {
      this.currentRecipe = new Recipe("Recipie not found", "404", "https://previews.123rf.com/images/mousemd/mousemd1710/mousemd171000009/87405336-404-not-found-concept-glitch-style-vector.jpg"
        ,null);
        this.showButton = false;
    }
  }

  ngOnChanges() {

  }

  deleteRecipie(){
    if(confirm("Are you sure you want to delete this recipie?")){
      this.recipeServ.recipes.splice(this.indexOfRecipe, 1);
      this.route.navigate([".."],{relativeTo:this.activRouter})
    }
  }

  addItems(items: Ingredient[]) {
    items.forEach((value) => {

      this.shopServ.ingredients.push(value);
    })
    this.successMessage = "Items have been added";
    setInterval(() => {
      this.successMessage = null;
    }, 5000)
  }

}
