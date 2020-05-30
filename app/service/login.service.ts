import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class LoginService {
  
  // baseUrl = environment._url;

  constructor(private http:HttpClient) { }
  sendRequest(data):Observable<any>{
  return  this.http.post("http://localhost:8086/login",data);
    
}
loggedIn(){
    return !!sessionStorage.getItem("id");
  }
  // loggedIn(){
  // this.roleid= sessionStorage.getItem('roleid');
  // if(this.roleid==1||this.roleid==2||this.roleid==3){
  //   return true;
  // }
  // }


