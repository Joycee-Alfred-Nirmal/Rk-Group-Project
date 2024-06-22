import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  slides = [
    { src: 'assets/images/web1.jpg', alt: 'agri' },
    { src: 'assets/images/rice.jpg', alt: 'maiza' },
    { src: 'assets/images/coach11.jpg', alt: 'New York' },
    { src: 'assets/images/rail1.jpg', alt: 'New York' }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.clearAutoSlide();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => this.next(), 3000); // Change slide every 3 seconds
  }

  clearAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
