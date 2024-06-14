import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  slides = [
    
    { src: "assets/images/banner2.jpeg", alt: 'agri' },
    { src: 'assets/images/rice.jpg', alt: 'maiza' },
    { src: 'assets/images/coach11.jpg', alt: 'New York' },
    { src: 'assets/images/rail1.jpg', alt: 'New York' }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
