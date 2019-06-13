import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';


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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.loading = !this.loading;
    setTimeout(()=>{
      this.loading = !this.loading;
      console.log(this.loginForm);
    },2000)
  }

}
