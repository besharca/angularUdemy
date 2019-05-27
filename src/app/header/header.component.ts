import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { faBookOpen, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBookOpen = faBookOpen;
  //faSpinner = faSpinner;

  @Output()
  recipeActive:EventEmitter<boolean> = new EventEmitter<boolean>();
  
  @Output()
  shoppingActive:EventEmitter<boolean> = new EventEmitter<boolean>();
  

  constructor() { }

  ngOnInit() {
  }

  onClickRecipe(){

    this.recipeActive.emit(true);
    this.shoppingActive.emit(false);
  }

  onClickShopping(){
    this.recipeActive.emit(!true);
    this.shoppingActive.emit(!false);
  }

}

