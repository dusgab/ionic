import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KaraokePage } from '../karaoke/karaoke';
import { Karaoke2Page } from '../karaoke2/karaoke2';
import { Karaoke3Page } from '../karaoke3/karaoke3';

@Component({
  selector: 'page-canta',
  templateUrl: 'canta.html'
})
export class CantaPage {

  constructor(public navCtrl: NavController) {
  }
  goToKaraoke(params){
    if (!params) params = {};
    this.navCtrl.push(KaraokePage);
  }goToKaraoke2(params){
    if (!params) params = {};
    this.navCtrl.push(Karaoke2Page);
  }goToKaraoke3(params){
    if (!params) params = {};
    this.navCtrl.push(Karaoke3Page);
  }
}
