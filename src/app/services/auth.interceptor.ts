import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpRegisterLogin } from './http-register-login.services';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private httpLogin: HttpRegisterLogin) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let headerToken:string = "";
        if(this.httpLogin.isLogged){
            headerToken = "Token " + this.httpLogin.token;
        }

        const requestAuth = req.clone(
        {
          headers: new HttpHeaders({"Authorization":headerToken})
        }
        );
  
        return next.handle(requestAuth);
    }

}