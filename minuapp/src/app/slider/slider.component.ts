import { Component, OnInit } from '@angular/core';
import {SlickCarouselModule} from 'ngx-slick-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  images = [  
    { img: "../assets/images/1.jpg" },  
    { img: "../assets/images/2.jpg" },  
    { img: "../assets/images/3.jpg" },  
    { img: "../assets/images/4.jpg" },  
    { img: "../assets/images/5.jpg" },  
    { img: "../assets/images/6.jpg" },  
    { img: "../assets/images/7.jpg" },  
    { img: "../assets/images/8.jpg" },  
    { img: "../assets/images/9.jpg" },  
  ];  
  
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": false  
  }; 
}

