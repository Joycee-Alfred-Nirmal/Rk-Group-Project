import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { User } from '../Models/user';
import { LoginService } from './login.service'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private hc:HttpClient , private injector: Injector) { }

   // Lazy-loaded getter for LoginService
   private get loginService(): LoginService {
    return this.injector.get(LoginService);
  }

  addUser(user:User){
    return this.hc.post<User>("http://localhost:8085/api/v2/registerUser",user);
    }

    addProductToCart(product:any){
      const headers = new HttpHeaders({
        'Content-Type'  : 'application/json',
        'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
      });
      return this.hc.post<any>("http://localhost:8085/api/v2/user/cart", product ,{ headers });
    }
  
    getProductsCart(){
      const headers = new HttpHeaders({
        'Content-Type'  : 'application/json',
        'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
      });
      return this.hc.get<any>("http://localhost:8085/api/v2/user/carts" ,{ headers });
    }
}
