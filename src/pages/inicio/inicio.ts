import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
}
