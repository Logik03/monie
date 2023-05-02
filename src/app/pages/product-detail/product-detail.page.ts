import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {


  segment : string | undefined;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.segment = "about";
    //this.ngOnInit();
  }

  segmentChanged(event : any) {
    this.segment = event.target.value; 
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab1')
  }

}
