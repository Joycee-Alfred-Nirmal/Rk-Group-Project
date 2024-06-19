import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  imgSrc:string;
  title :string;
  rating: string;
  quantity:number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(item: CartItem) {
    const existingItem = this.cartItems.find(cartItem => cartItem.title === item.title);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(title: string) {
    this.cartItems = this.cartItems.filter(item => item.title !== title);
    this.cartSubject.next(this.cartItems);
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  constructor() { }
}
