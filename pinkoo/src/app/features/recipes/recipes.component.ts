import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    recipesList: Recipe[] = [];

    constructor(private apiService: AppService) {}

    ngOnInit(): void {
        this.apiService.getRecipes().subscribe({
            next: (recipes) => {
                this.recipesList = recipes;
                // this.isLoading = false;
                console.log(this.recipesList);
                
            },
            error: (err) => {
                // this.isLoading = false;
                console.log(`Error ${err}`);
            }
        });
    }
}
