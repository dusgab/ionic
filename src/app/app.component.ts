import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { CantaPage } from '../pages/canta/canta';
import { KaraokePage } from '../pages/karaoke/karaoke';
import { Karaoke2Page } from '../pages/karaoke2/karaoke2';
import { Karaoke3Page } from '../pages/karaoke3/karaoke3';
import { MSicaPage } from '../pages/m-sica/m-sica';
import { FestivalDelChamamPage } from '../pages/festival-del-chamam/festival-del-chamam';
import { AgendaCulturalPage } from '../pages/agenda-cultural/agenda-cultural';


import { IngresarPage } from '../pages/ingresar/ingresar';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = IngresarPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }goToCanta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CantaPage);
  }goToKaraoke(params){
    if (!params) params = {};
    this.navCtrl.setRoot(KaraokePage);
  }goToKaraoke2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Karaoke2Page);
  }goToKaraoke3(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Karaoke3Page);
  }goToMSica(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MSicaPage);
  }goToFestivalDelChamam(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FestivalDelChamamPage);
  }goToAgendaCultural(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AgendaCulturalPage);
  }
}
