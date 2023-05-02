import { Component, ElementRef, ViewChild } from '@angular/core';
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
export class Tab1Page {
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

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
      delay: 3000
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
   this.swiper = this.swiperRef?.nativeElement.swiper;
   //this.swiperRef.autoplay.start()
}

setSwiperInstance(swiper : any) {
  setInterval(() => {
    swiper.slideNext();
  }, 3000);
}
}
