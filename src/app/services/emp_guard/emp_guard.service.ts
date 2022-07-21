/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class emp_guardService implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        let user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (!user.role.includes('Manager')) {
            // Allow user to access the employee page if the user is an Employee
            return true;
        } else {
            this.router.navigate(['/home/man']);
            return false;
        }
    }
}