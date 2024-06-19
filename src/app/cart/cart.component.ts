import { Component, OnInit } from '@angular/core';
import { products } from '../Models/products';
import { Router } from '@angular/router';
import { CartItem, CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(title: string) {
    this.cartService.removeFromCart(title);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
