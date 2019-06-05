import { Component, OnInit } from '@angular/core';
import { HttpRecipe } from '../services/http-recipe.service';
import { Recipe } from '../recipe/recipe-list-edit/recipe-item/recipe.model'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atest-component',
  templateUrl: './atest-component.component.html',
  styleUrls: ['./atest-component.component.css']
})
export class AtestComponentComponent implements OnInit {


  recipes:Recipe[];


  constructor(private httpRecipeServ: HttpRecipe, private route: ActivatedRoute) { 
    this.recipes = this.route.snapshot.data['recipeList'];
   }

  ngOnInit() {
    // this.httpRecipeServ.getRecipes().subscribe((value:Recipe[])=>{
    //   this.recipes = value;
    // });
  }

}
