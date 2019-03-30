import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {

       //console.log("route ",route);

        
        if (localStorage.getItem('sesion')==null) {
            console.log("no puedes pasar");
            this.router.navigate(['login']);
            return false;
        }

        return true;

    }

}