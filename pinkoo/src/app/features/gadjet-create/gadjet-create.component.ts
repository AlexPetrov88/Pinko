import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { numberValidator } from 'src/app/shared/validators/numberValidator';
import { urlValidator } from 'src/app/shared/validators/urlValidator';

@Component({
    selector: 'app-gadjet-create',
    templateUrl: './gadjet-create.component.html',
    styleUrls: ['./gadjet-create.component.css']
})
export class GadjetCreateComponent {
    createGadjetForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        price: [
            '',
            [Validators.required, numberValidator(), Validators.min(5), Validators.max(300)]
        ],
        imageUrl: ['', [Validators.required, urlValidator()]]
    });
    constructor(private appService: AppService, private fb: FormBuilder, private router: Router) {}

    cancelNewTheme() {
        this.router.navigate(['/catalog']);
    }

    createNewGadjet() {
        if (this.createGadjetForm.invalid) {
            return;
        }

        const { name, price, imageUrl } = this.createGadjetForm.value;

        this.appService.createNewGadjet(name!, price!, imageUrl!).subscribe(() => {
            this.router.navigate(['/tools']);
        });
    }
}
