import { Component, OnInit } from '@angular/core';
import { products } from '../Models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartList:products[]=[];

  cart:any=[]
 
constructor(private router:Router){}

  ngOnInit(): void {
        console.log(Response)

      };

}
