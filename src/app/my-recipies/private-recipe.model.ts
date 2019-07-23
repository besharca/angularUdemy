import { Ingredient } from '../shared/ingredient.model';

export class PrivateRecipe {
    id:number;
    email:string;
    name:string;
    imagePath:string[];
    description:string;
    ingredients:Ingredient[];
}