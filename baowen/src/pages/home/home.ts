import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  slidesItems=[
    {img:'http://47.99.165.200/www/assets/imgs/home.jpeg'},
    {img:'http://47.99.165.200/www/assets/imgs/home1.jpeg'},
   
  ];
  constructor(public navCtrl: NavController) {

  }
  ionView//生命初始的时候
  ionViewDidLoad() {
  // 初始化slides

   
  }

 

}
