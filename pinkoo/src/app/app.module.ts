import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ClassesComponent } from './features/classes/classes.component';
import { ShopComponent } from './features/shop/shop.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipesDetailsModule } from './features/recipesDetails/recipes-details.module';
import { ClassesDetailsModule } from './features/classesDetails/classes-details.module';
// import { UsersModule } from './auth/users/users.module';
import { appInterceptorProvider } from './app.interceptor';
import { ClassCreateComponent } from './features/class-create/class-create.component';
import { RecipeCreateComponent } from './features/recipe-create/recipe-create.component';
import { GadjetCreateComponent } from './features/gadjet-create/gadjet-create.component';
import { EditRecipeComponent } from './features/edit-recipe/edit-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ClassesComponent,
    ShopComponent,
    RecipesComponent,
    ClassCreateComponent,
    RecipeCreateComponent,
    GadjetCreateComponent,
    EditRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule, // Reactive form,
    FormsModule,
    RecipesDetailsModule,
    ClassesDetailsModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
