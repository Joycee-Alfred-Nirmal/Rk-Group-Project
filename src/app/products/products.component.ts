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
    { imgSrc: 'assets/images/20.jpeg', title: 'RK Jowar Seeds', rating: 5 },
    { imgSrc: 'assets/images/21.jpeg', title: 'RK Green gram Seeds', rating: 5 },
    { imgSrc: 'assets/images/22.jpeg', title: 'RK Chilli Seeds', rating: 5 },
    { imgSrc: 'assets/images/wheat.jpg', title: 'RK Wheat Seeds', rating: 5 },
    { imgSrc: 'assets/images/sesame.jpg', title: 'RK Sesame Seeds', rating: 5 },
    { imgSrc: 'assets/images/demu.jpg' , title: 'Demo coach', rating:5},
    { imgSrc: 'assets/images/coach.jpg' , title: 'AC Coach', rating:5},
    { imgSrc: 'assets/images/vande.jpg', title:'Vande Bharath Coach', rating:5},
    { imgSrc: 'assets/images/railcar.jpeg', title:'Rail Car', rating:5}
  ];

}
