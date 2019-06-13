import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class HttpRegisterLogin {

    readonly registerURL = "http://localhost/register";
    readonly loginURL = "http://localhost/login";

    constructor(private http:HttpClient){
    }

    register(registerCredentials:{email:string,password:string, repatPassword:string}){
        return this.http.post(this.registerURL, registerCredentials);
    }

    login(loginCredentials:{email:string,password:string}){
        return this.http.post(this.loginURL,loginCredentials);
    }
}