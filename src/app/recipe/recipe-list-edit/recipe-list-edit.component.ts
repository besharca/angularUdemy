import { Component, OnInit } from '@angular/core';
import { SelectedRecipe } from 'src/app/services/selected-recipe.service';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list-edit',
  templateUrl: './recipe-list-edit.component.html',
  styleUrls: ['./recipe-list-edit.component.css']
})
export class RecipeListEditComponent implements OnInit {
  itemsPerPage: number = 5;
  currentPage: number = 1;

  constructor(private recipeServices: SelectedRecipe,
    private route: ActivatedRoute, private router:Router ) { 
  }

  ngOnInit() {
  }

  getIndex(indexOnPage: number): number {
    
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }

}
