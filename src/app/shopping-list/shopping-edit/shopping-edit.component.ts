import { Component, OnInit, Input } from '@angular/core';
import {Ingredient } from '../../shared/ingredient.model';  

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  name:string;
  amount:number;

  @Input()
  ingredients:Ingredient[];

  constructor() { }

  ngOnInit() {
  }

  add(name:string,amount:number,event) {
    this.ingredients.push(new Ingredient(name,amount)); 
    console.log(event.path);
    
  }

  
}
