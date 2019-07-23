import { Component, OnInit, Input } from '@angular/core';
import { PrivateRecipe } from '../private-recipe.model';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css']
})
export class OneRecipeComponent implements OnInit {

  @Input()
  recipe:PrivateRecipe;

  constructor() { }

  ngOnInit() {
  }

}
