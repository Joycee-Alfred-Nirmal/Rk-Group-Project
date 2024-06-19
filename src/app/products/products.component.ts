import { Component } from '@angular/core';
import { CartItem, CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = [
    { imgSrc: 'assets/images/9.jpg', title: 'RK Cotton Seeds', rating: 5 },
    { imgSrc: 'assets/images/10.jpg', title: 'RK Groundnut Seeds', rating: 5 },
    { imgSrc: 'assets/images/11.jpg', title: 'RK Maize Seeds', rating: 5 },
    { imgSrc: 'assets/images/20.jpeg', title: 'RK Jowar Seeds', rating: 5 },
    { imgSrc: 'assets/images/21.jpeg', title: 'RK Green gram Seeds', rating: 5 },
    { imgSrc: 'assets/images/22.jpeg', title: 'RK Chilli Seeds', rating: 5 },
    { imgSrc: 'assets/images/wheat.jpg', title: 'RK Wheat Seeds', rating: 5 },
    { imgSrc: 'assets/images/sesame.jpg', title: 'RK Sesame Seeds', rating: 5 },
   
  ];

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  addToCart(product: any) {
    const cartItem: CartItem = {
      imgSrc: product.imgSrc,
      title: product.title,
      rating: product.rating,
      quantity: 1
    };
    this.cartService.addToCart(cartItem);
  }

  isInCart(product: any): boolean {
    return this.cartItems.some(item => item.title === product.title);
  }

}
