import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-item/recipe.model'; 

@Component({
  selector: 'app-recipe-list-edit',
  templateUrl: './recipe-list-edit.component.html',
  styleUrls: ['./recipe-list-edit.component.css']
})
export class RecipeListEditComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() itemSelectedLv2: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {
    this.recipes.push(new Recipe("fried potatoes potatoes", "verry yummy", "https://www.seriouseats.com/recipes/images/2016/01/20160113-honey-butter-chips-vicky-wasik-7-1500x1125.jpg"));
    this.recipes.push(new Recipe("fried chinken", "verry  verry yummy", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3mqaKlRw2Q-NDkze65kR0gK82GPurrkiY5OiB5rxnMkGiyRZ"));
    this.recipes.push(new Recipe("fried chinken", "verry  verry yummy", "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/recipe-image-legacy-id-1074500_11.jpg"));
    }

  ngOnInit() {
  }

  itemSelectedLv1($event){
    this.itemSelectedLv2.emit($event);
  }
}
