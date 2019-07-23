import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { HttpRegisterLogin } from '../services/http-register-login.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBookOpen = faBookOpen;
  //faSpinner = faSpinner;




  constructor(private httpLogin:HttpRegisterLogin) { }

  ngOnInit() {

  }

  

}

