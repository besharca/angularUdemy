import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms"; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { RecipeListEditComponent } from './recipe/recipe-list-edit/recipe-list-edit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe/recipe-list-edit/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { IngredientItemComponent } from './shopping-list/ingredient-item/ingredient-item.component';
import { HighlightDirective } from './zDirectives/highlight.directive';
import { DropdownDirective } from './zDirectives/dropdown.directive';
import { SelectedRecipe } from './services/selected-recipe.service';
import { ShoppingServices } from './services/shopping-list.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent, 
    RecipeListEditComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    IngredientItemComponent,
    HighlightDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFontAwesomeModule,
    FontAwesomeModule
  ],
  providers: [SelectedRecipe, ShoppingServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
