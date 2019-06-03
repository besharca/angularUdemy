import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { SelectedRecipe } from 'src/app/services/selected-recipe.service';
import { Recipe } from '../recipe-list-edit/recipe-item/recipe.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model'; 

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  //has array reference 
  editedRecipe:Recipe;

  recipeIndex:number;
  ingredients:Ingredient[];
  recipeImage:string;


  form:FormGroup;

  constructor(private activeRoute:ActivatedRoute, 
    private recipeServ:SelectedRecipe,
    private route:Router) { }

  ngOnInit() {
    this.recipeIndex = +this.activeRoute.snapshot.params['id'];
    this.editedRecipe = this.recipeServ.recipes[this.recipeIndex]; 
    this.ingredients = this.editedRecipe.ingredients.slice();
    this.recipeImage = this.editedRecipe.imagePath.slice();
    
    
    this.form = new FormGroup({
      'name': new FormControl(this.editedRecipe.name, Validators.required),
      'imgUrl': new FormControl(this.editedRecipe.imagePath,Validators.required),
      'description': new FormControl(this.editedRecipe.description,Validators.required),
    })
    
  }

  removeIngredient(i:number){
    this.ingredients.splice(i,1);
  }

  onSubmit(){
    if(this.form.valid && this.ingredients.length>0){
      const updatedRecipe: Recipe = new Recipe(
        this.form.value.name,
        this.form.value.description,
        this.form.value.imgUrl,
        this.ingredients
      )
      this.recipeServ.recipes[this.recipeIndex] = updatedRecipe;
      this.route.navigate([".."],{relativeTo:this.activeRoute}); 
      
    }
    
  }

  addIngredient(name:string,amount:number){
    if(name&&amount && amount > 0 && Number.isInteger(+amount))
    this.ingredients.push(new Ingredient(name,amount)); 
  }

  leave(){
    this.route.navigate([".."],{relativeTo:this.activeRoute});
  }
}
