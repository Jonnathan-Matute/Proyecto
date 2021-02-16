import { Component, OnInit } from '@angular/core';
//autenticacion para logout
import { AuthService } from "../servicios/auth.service";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {

  slides = [
    {
      img: 'assets/11.jpg',
      titulo: 'Proyecto Ionic'
    },
    {
      img: 'assets/1.jpg',
      titulo: 'Recuerda siempre tus eventos'
    },
    {
      img: 'assets/2.jpg',
      titulo: 'Eventos',
      des: 'Se puede crear, editar y eliminar los eventos'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authservice: AuthService
  ) {  }

  Onlogout() {
    this.authservice.logout();
  }

  
}
