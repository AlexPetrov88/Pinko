
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { emailValidator } from 'src/app/shared/validators/emailValidator';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm = this.fb.group({
        email: ['', [Validators.required, emailValidator()]],
        password: ['', [Validators.required, Validators.minLength(5)]]
    });

    constructor(
        private fb: FormBuilder,
        private userService: UsersService,
        private router: Router
    ) {}



    login() {
        if (this.loginForm.invalid) {
            return;
        }

        const { email, password } = this.loginForm.value

        this.userService.login( email!, password! ).subscribe((user) => {
            console.log('login user', user);
            
            this.router.navigate(['/home']);
        });
    }
}
