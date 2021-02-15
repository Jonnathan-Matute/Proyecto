import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//configuracion de firebase credenciales
import { firebaseConfig } from "../environments/environment";
//lib de angularFireModelo
import { AngularFireModule } from "@angular/fire";
//modulo de autenticacion de Firebase
import { AngularFireAuthModule } from "@angular/fire/auth";

//crear el home de las paliculas
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

// AngularFire
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

//google maps
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';


@NgModule({
  declarations: [AppComponent,GooglemapsComponent],
  entryComponents: [GooglemapsComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    //inicializamos la app con la configuración de enviroment
    AngularFireModule.initializeApp(firebaseConfig),
    //modulo de firebase
    AngularFireAuthModule,
    //
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
