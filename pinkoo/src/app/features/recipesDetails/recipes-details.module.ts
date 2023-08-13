import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesDetailsRoutingModule } from './recipes-details-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [RecipeDetailsComponent],
    imports: [CommonModule, RecipesDetailsRoutingModule, ReactiveFormsModule, 
    FormsModule,]
})
export class RecipesDetailsModule {}
