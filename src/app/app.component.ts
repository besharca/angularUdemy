import { Component } from '@angular/core';

import { Router, NavigationStart,NavigationEnd, Event, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
   
  // loading:boolean = false;

  // constructor(private _router:Router){
  //   this._router.events.subscribe(
  //     (routerEvent:Event)=>{
  //       if(routerEvent instanceof NavigationStart){
  //         this.loading = true;
  //       }
  //       if(routerEvent instanceof NavigationError){
  //         this.loading = false;
  //       }

  //       if(routerEvent instanceof NavigationEnd){
  //         this.loading = false;
  //       }

       
  //     }
  //   );
  //}
}
