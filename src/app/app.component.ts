import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper';
//import 'swiper/css/bundle';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    autoplay: {
      delay: 1000
    }
  };  
  constructor() {
    register();
  }
}
