import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/emailValidator';
import { matchPasswordsValidator } from 'src/app/shared/validators/passwordValidator';
import { UsersService } from '../users.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    registerForm = this.fb.group({
        email: ['', [Validators.required, emailValidator()]],
        passGroup: this.fb.group(
            {
                password: ['', [Validators.required, Validators.minLength(5)]],
                rePassword: ['', [Validators.required]]
            },
            {
                validators: [matchPasswordsValidator('password', 'rePassword')]
            }
        )
    });

    constructor(
        private fb: FormBuilder,
        private userService: UsersService,
        private router: Router
    ) {}

    register() {
        if (this.registerForm.invalid) {
            return;
        }
        const { email, passGroup: { password, rePassword } = {} } = this.registerForm.value;

        this.userService.register( email!, password!).subscribe((data) => {
            console.log('register user', data);
          
            this.router.navigate(['/home']);
        });
        this.router.navigate(['/home']);
    }
}