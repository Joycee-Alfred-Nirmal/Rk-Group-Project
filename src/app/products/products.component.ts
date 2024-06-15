import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = [
    { imgSrc: 'assets/images/9.jpg', title: 'RK Cotton Seeds', rating: 5 },
    { imgSrc: 'assets/images/10.jpg', title: 'RK Groundnut Seeds', rating: 5 },
    { imgSrc: 'assets/images/11.jpg', title: 'RK Maiza Seeds', rating: 5 },
    { imgSrc: 'assets/images/20.jpeg', title: 'RK Pearl Seeds', rating: 5 },
    { imgSrc: 'assets/images/21.jpeg', title: 'RK Soya Beens Seeds', rating: 5 },
    { imgSrc: 'assets/images/22.jpeg', title: 'RK Chilli Seeds', rating: 5 },
    { imgSrc: 'assets/images/wheat.jpg', title: 'Wheat Seeds', rating: 5 },
    { imgSrc: 'assets/images/sesame.jpg', title: 'Sesame Seeds', rating: 5 },
    { imgSrc: 'assets/images/demu.jpg' , title: 'Demu coach', rating:5},
    { imgSrc: 'assets/images/coach.jpg' , title: 'coach', rating:5}
  ];

}
