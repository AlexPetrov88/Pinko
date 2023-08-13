import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsersService } from 'src/app/auth/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthActivate implements CanActivate {

  constructor(private userService: UsersService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    
    if (this.userService.isLogged) {
      return true;
    }
    
    // User is not logged in, redirect to login page
    return this.router.createUrlTree(['/users/login']);
  }
}