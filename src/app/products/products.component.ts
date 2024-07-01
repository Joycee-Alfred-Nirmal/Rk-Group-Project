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
    { imgSrc: 'assets/images/9.jpg', title: 'RK Cotton Seeds', rating: 5 , description: "", expanded: false, visible: false },
    { imgSrc: 'assets/images/10.jpg', title: 'RK Groundnut Seeds', rating: 5 , description:"", expanded: false, visible: false },
    { imgSrc: 'assets/images/11.jpg', title: 'RK Maize Seeds', rating: 5 , description:"", expanded: false, visible:false},
    { imgSrc: 'assets/images/20.jpeg', title: 'RK Jowar Seeds', rating: 5 , description:"", expanded: false, visible: false},
    { imgSrc: 'assets/images/21.jpeg', title: 'RK Green gram Seeds', rating: 5 , description: "", expanded: false, visible: false},
    { imgSrc: 'assets/images/22.jpeg', title: 'RK Chilli Seeds', rating: 5 , description: "", expanded: false, visible: false},
    { imgSrc: 'assets/images/wheat.jpg', title: 'RK Wheat Seeds', rating: 5 , description: "> Planting Time: Fall (before winter). > Growth Period: Starts growing before winter, slows down during cold months, and resumes growth in spring.> Harvest Time: Late spring or early summer.> Duration: Approximately 7-9 months from planting to harvest 1.", expanded: false, visible: false},
    { imgSrc: 'assets/images/sesame.jpg', title: 'RK Sesame Seeds', rating: 5 , description: "> While both black and white sesame seeds are good for overall health, black sesame seeds are particularly beneficial for menstrual health. > White sesame seeds are also occasionally planted, but black or brown sesame seeds are more common in the U.S.2.", expanded: false, visible: false},
   
  ];



  constructor() {}

  ngOnInit(): void {
   
   
  }

  toggleExpand(product:Product) : void{
   
    product.expanded = !
    product.expanded;
  }

 

}
