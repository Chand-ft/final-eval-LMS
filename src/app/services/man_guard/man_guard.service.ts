/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class man_guardService implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        let user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (user.role.includes('Manager')) {
            // Allow user to access the employee page if the user is an Manager
            return true;
        } else {
            this.router.navigate(['/home/emp']);
            return false;
        }
    }
}