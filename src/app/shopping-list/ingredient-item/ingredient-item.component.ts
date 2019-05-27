import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingServices } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css']
})
export class IngredientItemComponent implements OnInit {

  @Input()
  ingredient:Ingredient;

  @Input()
  ingredientIndex:number;

  constructor(private shopServ:ShoppingServices) {}

  ngOnInit() {
    
  }
  
  selectedIngredient(){
    
  }

}
