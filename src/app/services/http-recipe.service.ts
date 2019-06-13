import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { tap } from 'rxjs/operators';
import { throwError } from 'rxjs'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe/recipe-list-edit/recipe-item/recipe.model';
import { ResolvedRecipes } from './resolved-recipes.model';

@Injectable({providedIn:'root'})
export class HttpRecipe implements Resolve<ResolvedRecipes>, OnInit, OnDestroy {
    //variables
    readonly URL: string = "http://localhost:8080/recipes";
    staticRecipes: Recipe[] = [];

    refreshRecipes: Subject<Recipe[]> = new Subject<Recipe[]>();


    //constructor
    constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router) {
        this.refreshStaticRecipes();
    }

    ngOnInit() {
    }
    ngOnDestroy() {

    }

    //refresh static recipes list method 
    refreshStaticRecipes() {
        //call for new recipe list
        this.getRecipes().subscribe((value: Recipe[]) => {
            this.staticRecipes = value;
            //inform components about it
            this.refreshRecipes.next(this.staticRecipes);
        });

    }


    //crud
    postRecipe(newRecipe: Recipe) {
        return this.http.post(this.URL, newRecipe);
    }

    getRecipes(): Observable<any> {
        return this.http.get(this.URL);
    }

    putRecipe(editedRecipe: Recipe) {
        return this.http.put(this.URL + "/" + editedRecipe.id, editedRecipe);
    }

    deleteRecipe(id: number) {
        return this.http.delete(this.URL + "/" + id + "/delete").pipe(tap((value) => {
            console.log(value);
        })).subscribe(() => {
            this.refreshStaticRecipes();
        },
            //java ResponseEntity httpstatus 200 is shown as error
            (error: HttpErrorResponse) => {
                if (error.status === 200) {
                    this.refreshStaticRecipes();
                }
            });
    }





    displayRecipeById(id: number) {
        return this.staticRecipes.find((oneRecipe) => {
            return oneRecipe.id === id;
        });
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<ResolvedRecipes> | Promise<ResolvedRecipes> | ResolvedRecipes {

        return this.getRecipes().pipe(
            map(
                (recipes) => {
                   return new ResolvedRecipes(recipes);
                }
            ),
            catchError((err:any)=>{
               return of(new ResolvedRecipes(null,err));
            }));

    }

}