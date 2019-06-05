import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { SelectARecipeComponent } from './recipe/select-a-recipe/select-a-recipe.component';
import { NewRecipeComponent } from './recipe/new-recipe/new-recipe.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AtestComponentComponent } from './atest-component/atest-component.component';
import { HttpRecipe } from './services/http-recipe.service';

const routes: Routes = [
  {path:'test', component:AtestComponentComponent, resolve:{recipeList:HttpRecipe}},
  {path:'', redirectTo:'recipes', pathMatch:'full'},
  {path:'recipes', component:RecipeComponent, children:[
    {path:'', component:SelectARecipeComponent},
    {path:'new', component:NewRecipeComponent},
    {path:':id', component:RecipeDetailsComponent},
    {path:':id/edit', component:EditRecipeComponent},
  ]}, 
  {path:'list', component:ShoppingListComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
