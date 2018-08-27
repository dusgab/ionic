import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { RegistrarsePage } from '../registrarse/registrarse';

@Component({
  selector: 'page-ingresar',
  templateUrl: 'ingresar.html'
})
export class IngresarPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on this page
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving this page
    this.menuCtrl.enable(true);
  }

  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToRegistrarse(params){
    if (!params) params = {};
    this.navCtrl.push(RegistrarsePage);
  }goToIngresar(params){
    if (!params) params = {};
    this.navCtrl.push(IngresarPage);
  }
}
