import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Models/login';
import { User } from '../Models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient,private router:Router , private injector: Injector) { }

  // Lazy-loaded getter for LoginService
  private get userService(): UserService {
    return this.injector.get(UserService);
  }

  isLoggedIn:boolean=false;
  logged:Login={};

  checkLogin(login:User){
    this.httpClient.post('http://localhost:8080/api/v1/Login',login).subscribe({
      next:(data:any)=>{
        console.log(data)
        this.logged=data;
        sessionStorage.setItem("token",data.token);
        localStorage.setItem('token',data.token);
        console.log("Data save in user")
        console.log(this.logged);
        console.log("Done")
        if(this.logged!=null){
          this.isLoggedIn=true;
          console.log(this.isLoggedIn)
          alert(' welcome ' );
          this.router.navigateByUrl('/pizza-view')
        }
        
      },

       error:(Error)=>{
        // alert("Username and Password does not match");
      // }

      // (err:Error)=>{ 

        console.log(Error.message)
         if(Error.message.endsWith("404 OK")){
          alert ("User Not Exists")
        }else{
        alert("Password and email Not matched")}
        }
       
     });

}
}
