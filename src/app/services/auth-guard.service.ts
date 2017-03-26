import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { UserService } from './user.service'; 

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
        
    constructor(private userService: UserService, private router: Router) {}

    canActivate() : boolean {
        console.log(this.userService.isAuthenticated);
        if(!this.userService.isAuthenticated){
            this.router.navigate(['/signin']);
        }
        return this.userService.isAuthenticated;
    }

    canActivateChild(): boolean  {
        return this.canActivate();
    }
}