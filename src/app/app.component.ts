import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-proj';
  
  recipeLink:boolean = true;
  shoppingLink:boolean = false;

  onShoppingNotify($event){
    this.shoppingLink=$event;
  }
  
  onRecipeNotify($event){
    this.recipeLink=$event;
  }
}
