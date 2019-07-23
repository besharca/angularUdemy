import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRegisterLogin } from '../services/http-register-login.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  buttonStatus:boolean = true;

  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  registerForm:FormGroup = new FormGroup({
    "regEmail":new FormControl("", [Validators.pattern(this.emailPattern),Validators.required]),
    "password":new FormControl("", [Validators.minLength(6),Validators.maxLength(15),Validators.required]),
    "confirmPassword":new FormControl("", [Validators.minLength(6),Validators.maxLength(15),Validators.required]),
  });

  constructor(private httpRegLogin:HttpRegisterLogin) { }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(()=>{
      this.buttonStatus = this.disabledButton();
    })
  }

  onSubmit(){
       this.httpRegLogin.register(
         {
          email:this.registerForm.controls.regEmail.value,
          password:this.registerForm.controls.password.value,
          repeatPassword:this.registerForm.controls.confirmPassword.value
          })
          .subscribe((response)=>{
            console.log(response);
            console.log("works");
            
          })
  }

  disabledButton():boolean{
    return (this.registerForm.controls.regEmail.invalid ||
      this.registerForm.controls.password.invalid ||
      this.registerForm.controls.confirmPassword.invalid ||
      !(this.registerForm.controls.confirmPassword.value === 
      this.registerForm.controls.password.value) ||
      !this.registerForm.controls.password.value ||
      !this.registerForm.controls.confirmPassword.value ||
      !this.registerForm.controls.regEmail.value);
  }
  
}
