/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class auth_guardService implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        let user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (user) {
            // Allow user to access the home page if the user has data (is logged in)
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}