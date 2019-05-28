import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';

const routes: Routes = [
  {path:'', redirectTo:'recipes', pathMatch:'full'},
  {path:'recipes', component:RecipeComponent, children:[
    {path:':id', component:RecipeDetailsComponent}
  ]}, 
  {path:'list', component:ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
