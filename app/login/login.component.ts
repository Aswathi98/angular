
import { Component ,OnInit} from '@angular/core';


import {HttpClient} from '@angular/common/http';


import { Router } from "@angular/router";


import swal from "sweetalert2";
import { FormBuilder, FormGroup, Validators, NgForm,FormControl, FormGroupDirective } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import{login} from './login';
import {LoginService} from "../service/login.service";
 @Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
 })
export class LoginComponent implements OnInit{

  constructor(private http:HttpClient,private router:Router,private service:LoginService) { 

  }
  data:login={empId:"",password:""};

  ngOnInit() {
    
  }
  onSubmit(form:NgForm) {
       this.data={empId:form.value.username,password:form.value.password};
      
  
  this.service.sendRequest(this.data)
  .subscribe(
    
    (res)=>{
      let reslogin:login=res;
      if(reslogin.status=="Success"){
        sessionStorage.setItem("username",reslogin.employeeName);
        sessionStorage.setItem("id",reslogin.empId);
        
      console.log(reslogin);
    this.router.navigate(['/upload',{relativeTo:this.router}])
      }
      
  
    else{
      this.router.navigate(['/login',{relativeTo:this.router}])
      alert('check again');
      // swal.fire({
      //   icon:'error',
      //   title:'invalid login',
      //   text:'check username and password',
      //   confirmButtonColor:'#00aaad'
      // })
    }
    },
(err)=>{
  // swal.fire({
  //       icon:'error',
  //       title:'invalid login',
  //       text:'check username and password',
  //       confirmButtonColor:'#00aaad'
  //     })
  alert("Invalid Login")
}

    
  )
}
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }  
    
