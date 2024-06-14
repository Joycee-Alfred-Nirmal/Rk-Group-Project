import { Component } from '@angular/core';

@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrl: './agriculture.component.css'
})
export class AgricultureComponent {

  showMore: boolean = false;

  toggleReadMore() {
    this.showMore = !this.showMore;
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("mybtn");

    if (dots && moreText && btnText) {
      if (this.showMore) {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.innerHTML = "Read less";
      } else {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.innerHTML = "Read more";
      }
    }
  }
}


