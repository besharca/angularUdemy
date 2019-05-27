import { Component, OnInit, Input } from '@angular/core';
import {Ingredient } from '../../shared/ingredient.model';  
import { ShoppingServices } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    name:string;
    amount:number; 

  constructor(private shopServ: ShoppingServices) {  
    
  }

  ngOnInit() {
    
  }

  add(name:string,amount:number) {
    if(name&&amount) this.shopServ.ingredients.push(new Ingredient(name,amount)); 
    
  }

  
}
