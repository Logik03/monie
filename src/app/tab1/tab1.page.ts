import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper';
import { Router } from '@angular/router';
import Swiper, { Autoplay } from 'swiper';
//import SwiperCore, {Autoplay} from 'swiper';
//SwiperCore.use([Autoplay]);
//import { SwiperComponent } from 'swiper/angular';
//import {Swiper} from 'swiper/types';
Swiper.use([Autoplay]);
register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {
  @ViewChild('swiperRef') swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  

  config: SwiperOptions = {
    autoplay: {
      delay: 5000
    }
  }; 
  
  

  likedBy : boolean = false;

  constructor(private router : Router) {}


  clickLike() {
    this.likedBy = !this.likedBy;
  }

  openDetails() {
    this.router.navigateByUrl('/product-detail')
  }

  ngAfterViewInit() {
    var mySwiper = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 100
    });
   this.swiper = this.swiperRef?.nativeElement.swiper;
   console.log(this.swiper, 'i am swiper')
   
   //this.swiperRef.autoplay.start()
}

setSwiperInstance(swiper : any) {
  setInterval(() => {
    swiper.slideNext();
  }, 3000);
}
}
