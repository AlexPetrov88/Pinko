import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { numberValidator } from 'src/app/shared/validators/numberValidator';
import { urlValidator } from 'src/app/shared/validators/urlValidator';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent {
  createRecipeForm = this.fb.group({
    recipeName: ['', [Validators.required, Validators.minLength(2)]],
    chef: ['', [Validators.required]],
    time: ['', [Validators.required, numberValidator(), Validators.min(5), Validators.max(60)]],
    imageUrl: ['', [Validators.required, urlValidator()]],
    summary: ['', [Validators.required, Validators.minLength(10)]]
});
constructor(private appService: AppService, private fb: FormBuilder, private router: Router ) {}

createNewRecipe() {
    if (this.createRecipeForm.invalid) {
        return;
    }
    
    const { recipeName, chef, time, imageUrl, summary } = this.createRecipeForm.value;

    this.appService.createNewRecipe(recipeName!, chef!, time!, imageUrl!, summary!).subscribe(() => {
        this.router.navigate(['/catalog'])
    })
}
}
