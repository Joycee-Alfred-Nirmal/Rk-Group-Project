import { Component } from '@angular/core';


interface Product {
  title: string;
  imgSrc: string;
  rating: number;
  description: string;
  expanded : boolean;
  visible : boolean
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [
    { imgSrc: 'assets/images/9.jpg', title: 'Krishna cotton seeds', rating: 5 , description: "", expanded: false, visible: false },
    { imgSrc: 'assets/images/10.jpg', title: 'AJEYA Groundnut Seeds', rating: 5 , description:"", expanded: false, visible: false },
    { imgSrc: 'assets/images/11.jpg', title: 'RK Maize Seeds', rating: 5 , description:"", expanded: false, visible:false},
    { imgSrc: 'assets/images/20.jpeg', title: 'RK Jowar Seeds', rating: 5 , description:"", expanded: false, visible: false},
    { imgSrc: 'assets/images/21.jpeg', title: 'RK Green gram Seeds', rating: 5 , description: "", expanded: false, visible: false},
    { imgSrc: 'assets/images/22.jpeg', title: 'RK Chilli Seeds', rating: 5 , description: "", expanded: false, visible: false},
    { imgSrc: 'assets/images/wheat.jpg', title: 'RK Wheat Seeds', rating: 5 , description: "", expanded: false, visible: false},
    { imgSrc: 'assets/images/sesame.jpg', title: 'RK Sesame Seeds', rating: 5 , description: "", expanded: false, visible: false},
   
  ];



  constructor() {}

  ngOnInit(): void {
   
   
  }

  toggleExpand(product:Product) : void{
   
    product.expanded = !
    product.expanded;
  }

 

}
