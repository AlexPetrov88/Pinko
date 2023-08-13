import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { numberValidator } from 'src/app/shared/validators/numberValidator';
import { urlValidator } from 'src/app/shared/validators/urlValidator';

@Component({
    selector: 'app-edit-recipe',
    templateUrl: './edit-recipe.component.html',
    styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
    editRecipeForm = this.fb.group({
        recipeName: ['', [Validators.required, Validators.minLength(2)]],
        chef: ['', [Validators.required]],
        time: ['', [Validators.required, numberValidator(), Validators.min(5), Validators.max(60)]],
        imageUrl: ['', [Validators.required, urlValidator()]],
        summary: ['', [Validators.required, Validators.minLength(10)]]
    });
    
    constructor(
        private appService: AppService,
        private fb: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        if (this.appService.recipe) {
            const { recipeName, chef, time, imageUrl, summary, _createdOn, _id, _ownerId } =
                this.appService.recipe;

            this.editRecipeForm.setValue({
                recipeName,
                chef,
                time,
                imageUrl,
                summary
            });
        }
    }

    editRecipe() {
        if (this.editRecipeForm.invalid) {
            return;
        }
        const id = this.appService.recipe?._id;
        console.log('id button', id);

        const { recipeName, chef, time, imageUrl, summary } = this.editRecipeForm.value;

        this.appService
            .editRecipe(id!, recipeName!, chef!, time!, imageUrl!, summary!)
            .subscribe(() => {
                this.router.navigate(['/catalog']);
            });
    }

    
}
