import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRegisterLogin } from 'src/app/services/http-register-login.services'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loading = false;

  loginForm:FormGroup = new FormGroup({
    "email": new FormControl("",[Validators.email]),
    "password": new FormControl("", [Validators.minLength(7), Validators.required]),
    "remember": new FormControl(""),

  });

  constructor(private httpLogin:HttpRegisterLogin) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loading = true; 
    
    this.httpLogin
    .login({email:this.loginForm.value.email, password:this.loginForm.value.password})
    .subscribe(
      (response)=>{ 
        console.log(response);
        this.loading = false;
 
      }
    , (err)=>{
      console.log(err);
      this.loading= false;
    })

  }

}
