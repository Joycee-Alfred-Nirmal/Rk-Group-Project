import { Component, OnInit } from '@angular/core';
import { expand } from 'rxjs';
import { trigger, style, animate, transition } from '@angular/animations';

interface Feature {
  title : string;
  description : string;
  imgSrc : string;
  expanded : boolean;
  visible : boolean
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements OnInit {

  features: Feature[] = [
    {
      imgSrc: 'assets/images/R.jpg',
      title: 'Fresh and Organic',
      description: 'Organic Farming System Is A Method Of Farming System Which Primarily Aimed At Sustainable Agricultural Production In An Eco-Friendly Pollution Free Environment And Being Followed From Ancient Time In India.' ,
     
     
      expanded: false,
      visible: false
       
    },
    {
      imgSrc: 'assets/images/oil.jpg',
      title: 'Oil Seeds',
      description: 'To Elevate Oil Yield, Concentration Of Oil Per Seed, Seed Size, Or Seed Number And Yield Per Unit Area Needs To Be Increased.' ,
      expanded:false,
      visible:false
    },
    {
      imgSrc: 'assets/images/vande1.jpg',
      title: 'Railway Services',
      description: 'Titagarh Is A Leading Comprehensive Mobility Solution Provider With A Strong Presence In India And Italy. With State-Of-The-Art Factories In Both Countries, We Are Committed To Meeting The Diverse Requirements Of Passenger And Freight Rolling Stock',

      expanded:false,
      visible:false
    }
  ];

  constructor(){}
  ngOnInit(): void {
  this.showFeaturesOneByOne();
  }

  showFeaturesOneByOne():void{
    this.features.forEach((feature,index)=>{
      setTimeout(()=> {
        feature.visible = true;
      }, index * 1000);
    });
  }

  toggleExpand(feature:Feature) : void{
   
    feature.expanded = !
    feature.expanded;
  }

  
}

