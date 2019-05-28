import { Component, OnInit, Input, OnChanges } from '@angular/core'; 
import { SelectedRecipe } from 'src/app/services/selected-recipe.service';
import { ShoppingServices } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model'; 
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit, OnChanges {

  successMessage: string;

  indexOfRecipe:number;

  constructor(private currentRecipe:SelectedRecipe, private shopServ:ShoppingServices,
    private route: Router, private activRouter: ActivatedRoute) {   
    this.indexOfRecipe = +this.activRouter.snapshot.params["id"];
    this.activRouter.params.subscribe((routeParams)=>{
      this.indexOfRecipe=(+routeParams.id);
    })
    
  }
 
  

  ngOnInit() {
  }

  ngOnChanges(){
    
  }

  addItems(items:Ingredient[]){
    items.forEach((value)=>{

      this.shopServ.ingredients.push(value);
    })
    this.successMessage = "Items have been added";
    setInterval(()=>{
      this.successMessage = null;
    },5000)
  }

}
