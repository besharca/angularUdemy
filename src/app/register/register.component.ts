import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    "regEmail":new FormControl("", [Validators.email,Validators.required]),
    "password":new FormControl("", [Validators.minLength(6),Validators.maxLength(15),Validators.required]),
    "confirmPassword":new FormControl("", [Validators.minLength(6),Validators.maxLength(15),Validators.required]),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.registerForm);    
  }
}
