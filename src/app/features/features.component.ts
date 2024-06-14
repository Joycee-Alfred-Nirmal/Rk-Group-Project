import { Component } from '@angular/core';
import { expand } from 'rxjs';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  features = [
    {
      imgSrc: 'assets/images/R.jpg',
      title: 'Fresh and Organic',
      description: 'Organic Farming System Is A Method Of Farming System Which Primarily Aimed At Sustainable Agricultural Production In An Eco-Friendly Pollution Free Environment And Being Followed From Ancient Time In India.' ,
     
     
      expanded: false
       
    },
    {
      imgSrc: 'assets/images/oil.jpg',
      title: 'Oil Seeds',
      description: 'To Elevate Oil Yield, Concentration Of Oil Per Seed, Seed Size, Or Seed Number And Yield Per Unit Area Needs To Be Increased.' ,
      expanded:false
    },
    {
      imgSrc: 'assets/images/vande1.jpg',
      title: 'Railway Services',
      description: 'Titagarh Is A Leading Comprehensive Mobility Solution Provider With A Strong Presence In India And Italy. With State-Of-The-Art Factories In Both Countries, We Are Committed To Meeting The Diverse Requirements Of Passenger And Freight Rolling Stock',

      expanded:false
    }
  ];

  toggleExpand(feature:any){
    this.features.forEach(f => {
      if (f !== feature){
        f.expanded = false;
      }
    })
    feature.expanded = !
    feature.expanded;
  }

  
}

