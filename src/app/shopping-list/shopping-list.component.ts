import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [];
  test:any;

  constructor() {
    this.ingredients.push(new Ingredient("Apple",5));
    this.ingredients.push(new Ingredient("Tomatoes",15));
    this.ingredients.push(new Ingredient("Banana",11));
   }

  ngOnInit() {
  }

  newIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }

}
