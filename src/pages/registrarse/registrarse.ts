import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IngresarPage } from '../ingresar/ingresar';
import { InicioPage } from '../inicio/inicio';
//import { RegistrarsePage } from '../registrarse/registrarse';

@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html'
})
export class RegistrarsePage {

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

  goToIngresar(params){
    if (!params) params = {};
    this.navCtrl.push(IngresarPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToRegistrarse(params){
    if (!params) params = {};
    this.navCtrl.push(RegistrarsePage);
  }
}
