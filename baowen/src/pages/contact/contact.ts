import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
    ) {

  }
  go(){
   console.log("fgfgf");
   window.location.href="https://www.amap.com/";
  }
}
