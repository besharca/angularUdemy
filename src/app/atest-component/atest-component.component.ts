 
import { Component, OnInit, ViewChild } from '@angular/core';   
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-atest-component',
  templateUrl: './atest-component.component.html',
  styleUrls: ['./atest-component.component.css']
})
export class AtestComponentComponent   {
  
constructor(private http:HttpClient){

}

readonly URL:string = "http://localhost:8080/secured/recipes"; 

fire(){
    
  this.http.get(this.URL, {headers:new HttpHeaders({"Authorization":"Token eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEb2ciLCJ1c2VySWQiOiIxIiwicm9sZSI6IkFETUlOIn0.7S3vXqvQ2iQlHbkYgt2o_Y-2DNTrkGmwfu5uSLIyl0v3zfOFJnXjFAJYX0J4LDHIOvQe1b_IrI_BlRejQIB4Pw"})})
  .subscribe((response=>{
    console.log(response);
  }));
}

}
