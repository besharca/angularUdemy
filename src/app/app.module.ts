import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"

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
import {NgxPaginationModule} from 'ngx-pagination';
import { SelectARecipeComponent } from './recipe/select-a-recipe/select-a-recipe.component';
import { NewRecipeComponent } from './recipe/new-recipe/new-recipe.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AtestComponentComponent } from './atest-component/atest-component.component'; 
import { LoginComponent } from './header/login/login.component';
import { UserDetailsComponent } from './header/user-details/user-details.component'; 
import { ServerErrorComponent } from './server-error/server-error.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptorService } from './services/auth.interceptor';
import { MyRecipiesComponent } from './my-recipies/my-recipies.component'; 
import { OneRecipeComponent } from './my-recipies/one-recipe/one-recipe.component';
import { SelectedMyRecipeComponent } from './my-recipies/selected-my-recipe/selected-my-recipe.component';
import { FooterComponent } from './footer/footer.component';
import { FooterSocialComponent } from './footer/footer-social/footer-social.component';
import { EditMyRecipeComponent } from './my-recipies/edit-my-recipe/edit-my-recipe.component';
import { NewMyRecipeComponent } from './my-recipies/new-my-recipe/new-my-recipe.component'; 

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
    DropdownDirective,
    SelectARecipeComponent,
    NewRecipeComponent,
    EditRecipeComponent,
    PageNotFoundComponent,
    AtestComponentComponent,
    LoginComponent,
    UserDetailsComponent,
    ServerErrorComponent,
    RegisterComponent,
    MyRecipiesComponent,
    OneRecipeComponent,
    SelectedMyRecipeComponent,
    FooterComponent,
    FooterSocialComponent,
    EditMyRecipeComponent,
    NewMyRecipeComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFontAwesomeModule,
    FontAwesomeModule ,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: 
  [
    SelectedRecipe,
    ShoppingServices,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
