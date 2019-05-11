import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../recipe-list-edit/recipe-item/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnChanges {

  @Input() recipe:Recipe; 

  constructor() { 
   
  }

  ngOnInit() {
    this.recipe = new Recipe("bors","yummy",null);
  }

  ngOnChanges(){
    
  }

}
