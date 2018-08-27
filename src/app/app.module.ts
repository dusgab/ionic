import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { CantaPage } from '../pages/canta/canta';
import { MSicaPage } from '../pages/m-sica/m-sica';
import { FestivalDelChamamPage } from '../pages/festival-del-chamam/festival-del-chamam';
import { AgendaCulturalPage } from '../pages/agenda-cultural/agenda-cultural';
import { IngresarPage } from '../pages/ingresar/ingresar';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { KaraokePage } from '../pages/karaoke/karaoke';
import { Karaoke2Page } from '../pages/karaoke2/karaoke2';
import { Karaoke3Page } from '../pages/karaoke3/karaoke3';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    CantaPage,
    MSicaPage,
    FestivalDelChamamPage,
    AgendaCulturalPage,
    IngresarPage,
    RegistrarsePage,
    KaraokePage,
    Karaoke2Page,
    Karaoke3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    CantaPage,
    MSicaPage,
    FestivalDelChamamPage,
    AgendaCulturalPage,
    IngresarPage,
    RegistrarsePage,
    KaraokePage,
    Karaoke2Page,
    Karaoke3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}