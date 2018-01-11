import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router/";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
        private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.authService.isAuthenticated()  ;

    }

}