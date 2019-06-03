import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingServices {
    ingredients:Ingredient[] = []; 
    editedIngredient:Subject<number> = new Subject<number>();
  

    constructor() { 
     }

     ngOnInit(){ 
     }
}