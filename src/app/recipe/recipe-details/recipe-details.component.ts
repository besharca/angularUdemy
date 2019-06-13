import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SelectedRecipe } from 'src/app/services/selected-recipe.service';
import { ShoppingServices } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe-list-edit/recipe-item/recipe.model';
import { HttpRecipe } from 'src/app/services/http-recipe.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit, OnChanges {

  successMessage: string;
  idOfRecipe: number;
  showButton: boolean = true;
  subscription: Subscription;

  currentRecipe: Recipe;

  constructor(
    private httpRecipeServ: HttpRecipe,
    private shopServ: ShoppingServices,
    private route: Router,
    private activRouter: ActivatedRoute) { }


  ngOnInit() {

    this.idOfRecipe = +this.activRouter.snapshot.params["id"];
    this.currentRecipe = this.httpRecipeServ.displayRecipeById(this.idOfRecipe);

    this.activRouter.params.subscribe((routeParams) => {
      this.idOfRecipe = (+routeParams.id);
      this.currentRecipe = this.httpRecipeServ.displayRecipeById(this.idOfRecipe);
      this.showButton = true;
    })

    if (isNaN(+this.activRouter.snapshot.params["id"]) ||
      this.idOfRecipe < 1 ||
      !this.recipeExists()
    ) {
      this.currentRecipe = new Recipe("Recipie not found", "404", "https://previews.123rf.com/images/mousemd/mousemd1710/mousemd171000009/87405336-404-not-found-concept-glitch-style-vector.jpg"
        , null);
      this.showButton = false;
    }

    this.subscription = this.httpRecipeServ.refreshRecipes.subscribe(()=>{
      this.currentRecipe = this.httpRecipeServ.displayRecipeById(this.idOfRecipe);
    })

  }

  ngOnChanges() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteRecipie() {
    if (confirm("Are you sure you want to delete this recipie?")) {
      this.httpRecipeServ.deleteRecipe(this.idOfRecipe);
      this.route.navigate([".."], { relativeTo: this.activRouter })
    }
  }

  recipeExists(): boolean {

    let founded = false;
    this.httpRecipeServ.staticRecipes.forEach((value: Recipe) => {
      if (value.id == this.idOfRecipe) {
        founded = true;
      }
    });


    return founded;
  }

  addItems() {
    this.currentRecipe.ingredients
      .forEach(
        (value) => { this.shopServ.ingredients.push(value); }
      )

    this.successMessage = "Items have been added";
    setInterval(() => {
      this.successMessage = null;
    }, 5000)
  }

}
