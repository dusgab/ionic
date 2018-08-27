import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KaraokePage } from '../karaoke/karaoke';

@Component({
  selector: 'page-cant',
  templateUrl: 'cant.html'
})
export class CantPage {

  constructor(public navCtrl: NavController) {
  }
  goToKaraoke(params){
    if (!params) params = {};
    this.navCtrl.push(KaraokePage);
  }
}
