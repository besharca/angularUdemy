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
import { ServerErrorComponent } from './server-error/server-error.component';
import { RegisterComponent } from './register/register.component';
import { MyRecipiesComponent } from './my-recipies/my-recipies.component';
import { AuthGuard } from './services/auth.guard';
import { SelectedMyRecipeComponent } from './my-recipies/selected-my-recipe/selected-my-recipe.component'; 
import { NewMyRecipeComponent } from './my-recipies/new-my-recipe/new-my-recipe.component';

const routes: Routes = [
  {path:'test', component:AtestComponentComponent},
  {path:'', redirectTo:'recipes', pathMatch:'full'},
  {path:'my-recipes', component:MyRecipiesComponent, canActivate:[AuthGuard],
  children:[
    {path:"new", component:NewMyRecipeComponent},
    {path:":id", component:SelectedMyRecipeComponent}
  ]},
  {path:'recipes', component:RecipeComponent,resolve:{recipes:HttpRecipe}, children:[
    {path:'', component:SelectARecipeComponent},
    {path:'new', component:NewRecipeComponent},
    {path:':id', component:RecipeDetailsComponent},
    {path:':id/edit', component:EditRecipeComponent},
  ]}, 
  {path:'list', component:ShoppingListComponent},
  {path:'register', component:RegisterComponent},
  {path:'server-error/:error', component:ServerErrorComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
