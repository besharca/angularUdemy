import { Component, OnInit, Input } from '@angular/core';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { HttpRegisterLogin } from 'src/app/services/http-register-login.services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  faUser = faUser;
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;

  @Input()
  email:string;

  constructor(private httpLogin:HttpRegisterLogin) { }

  ngOnInit() {
  }

  logout(){
    this.httpLogin.logout();
  }

}
