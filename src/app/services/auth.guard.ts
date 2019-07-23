import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpRegisterLogin } from './http-register-login.services';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate {

    constructor(private loginServ:HttpRegisterLogin, private router:Router){

    }

    canActivate(route: import("@angular/router").ActivatedRouteSnapshot,
     state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> 
    {
        if(!this.loginServ.isLogged){
          return  this.router.createUrlTree(["/recipes"]);
        }
        return this.loginServ.isLogged;
        
    }
 


    
}