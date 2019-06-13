import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from './recipe-item/recipe.model';
import { HttpRecipe } from 'src/app/services/http-recipe.service';
import { Subscription } from 'rxjs';
import { ResolvedRecipes } from 'src/app/services/resolved-recipes.model';

@Component({
  selector: 'app-recipe-list-edit',
  templateUrl: './recipe-list-edit.component.html',
  styleUrls: ['./recipe-list-edit.component.css']
})
export class RecipeListEditComponent implements OnInit {
  itemsPerPage: number = 5;
  currentPage: number = 1;

  recipes:Recipe[];
  resolvedRecipes: ResolvedRecipes;
  subscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpRecipes:HttpRecipe
  ) {}

  ngOnInit() {
    this.resolvedRecipes = this.route.snapshot.data["recipes"];
    if(this.resolvedRecipes.recipes){
      this.recipes = this.resolvedRecipes.recipes
    }else{
      console.log(this.resolvedRecipes.error);
      this.router.navigate(['/server-error', this.resolvedRecipes.error.message]);
    }

    // subscribe to react to new recipes
    this.subscription = 
      this.httpRecipes.refreshRecipes.subscribe((value:Recipe[])=>{
        this.recipes = value;
      })
  }

  getIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }

}
