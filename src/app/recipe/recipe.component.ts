import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list-edit/recipe-item/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  itemSelectedLv3: Recipe;

  constructor() { }

  ngOnInit() {
  }

  itemSelectedLv2($event){ 
    this.itemSelectedLv3 = $event;
  }

}
