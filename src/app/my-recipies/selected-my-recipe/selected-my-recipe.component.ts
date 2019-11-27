import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrivateRecipe } from '../private-recipe.model';
import { HttpRecipe } from 'src/app/services/http-recipe.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { config } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-selected-my-recipe',
  templateUrl: './selected-my-recipe.component.html',
  styleUrls: ['./selected-my-recipe.component.css'],
  providers:[NgbCarouselConfig]
})
export class SelectedMyRecipeComponent implements OnInit {
  recipeId:number;
  images = [1, 2, 3, 4, 5].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  selectedPrivateRecipe: PrivateRecipe;

  constructor(private route:ActivatedRoute, private http:HttpRecipe, private carouselConfig: NgbCarouselConfig) {
    carouselConfig.interval = 4000;
    carouselConfig.pauseOnHover = true;
   }

  ngOnInit() {
    this.recipeId = +this.route.snapshot.params['id'];
    this.selectedPrivateRecipe = this.http.staticPrivateRecipes[this.recipeId];

    this.route.params.subscribe((routeParams)=>{
      this.recipeId= routeParams.id; 
      
      this.http.staticPrivateRecipes.forEach((value)=>{       
        if(value.id==this.recipeId){
          this.selectedPrivateRecipe = value;
        }
      });
    });
 
  }

}
