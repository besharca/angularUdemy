import { Component, OnInit } from '@angular/core';
import { HttpRecipe } from '../services/http-recipe.service';
import { PrivateRecipe } from './private-recipe.model';

@Component({
  selector: 'app-my-recipies',
  templateUrl: './my-recipies.component.html',
  styleUrls: ['./my-recipies.component.css']
})
export class MyRecipiesComponent implements OnInit {

  itemsPerPage: number = 5;
  currentPage: number = 1;

  privateRecipes:PrivateRecipe[] = [];

  constructor(private httpRecipes:HttpRecipe) {
    
   }

  ngOnInit() {
    this.httpRecipes.getPrivRecipes().subscribe((value)=>{
      this.privateRecipes = value;    
    });
  }

}
