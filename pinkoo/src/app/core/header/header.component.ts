import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/auth/users/users.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
    constructor(private userService: UsersService, private router: Router, private utilService: UtilService) {}
    get isLoggedIn(): boolean {
        // const user = this.utilService.getUserData();
        // if (user) {
        //     return true
        // } else {
        //     return false
        // }
        return this.userService.isLogged;
    }

    get email(): string {
        return this.userService.user?.email || '';
    }


    // ngOnChanges(): void {
    //     console.log(this.userService.isLoggedd());
    // }

    

    logout(): void {
        this.userService.logout().subscribe({
            next: () => {
                this.router.navigate(['/home']);
            },
            error: () => {
                this.router.navigate(['/home']);
            },
            // complete: () => {
            //     this.router.navigate(['/catalog']);
            // }
        });
    }
}
