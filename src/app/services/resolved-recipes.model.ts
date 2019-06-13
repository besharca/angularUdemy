import { Recipe } from '../recipe/recipe-list-edit/recipe-item/recipe.model';
import { HttpErrorResponse } from '@angular/common/http';

export class ResolvedRecipes{
    constructor(public recipes:Recipe[], public error:HttpErrorResponse = null){

    }
}