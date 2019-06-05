import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import {  Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../recipe/recipe-list-edit/recipe-item/recipe.model';

@Injectable()
export class HttpRecipe implements Resolve<Recipe[]>{
    constructor(private http: HttpClient) {

    }

    getRecipes():Observable<any> { 

        return this.http.get("http://localhost:8080/recipes", {
            headers:new HttpHeaders({"customHeader":"LUL", "customHEDER":"LOL"}),
            params: new HttpParams().set("dog","cat").set("doggo","catto")
        },); 
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<Recipe[]> | Promise<Recipe[]> | Recipe[]{
        return this.getRecipes();
    }


}