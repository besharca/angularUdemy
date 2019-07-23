import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterCredentials } from '../shared/register.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({providedIn:'root'})
export class HttpRegisterLogin implements OnInit {

    private readonly registerURL = "http://localhost:8080/register";
    private readonly loginURL = "http://localhost:8080/login";
    isLogged:boolean = false;
    token:string;
    email:string;

    constructor(private http:HttpClient, private router:Router){

        //check if logged
        if(localStorage.getItem("email") && localStorage.getItem("token")){
            this.isLogged=true;
            this.token = localStorage.getItem("token");
            this.email = localStorage.getItem("email");    
        }
    }

    ngOnInit(){
    }

    logout(){
        this.isLogged = false;
        this.token ="";
        this.email="";
        localStorage.removeItem("token");
        localStorage.removeItem("email");


        this.router.navigate(["/recipes"]);
    }

    register(registerCredentials:RegisterCredentials){
        return this.http.post(this.registerURL, registerCredentials);
    }

    login(loginCredentials:{email:string,password:string}){  
        return this.http
        .post<{token:string,error:string}>(this.loginURL,loginCredentials)
        .pipe(tap(
            (response)=>{ 
                
                if(response.token){
                    this.token = response.token;
                    this.isLogged = true;
                    this.email = loginCredentials.email;

                    localStorage.setItem("email",loginCredentials.email);
                    localStorage.setItem("token",response.token);

                    this.router.navigate(["/recipes"])
                }  
            }
        ));
    }
}