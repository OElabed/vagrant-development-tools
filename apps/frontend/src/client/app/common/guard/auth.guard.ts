import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('access_token')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild() {
        if (localStorage.getItem('access_token')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }

}
