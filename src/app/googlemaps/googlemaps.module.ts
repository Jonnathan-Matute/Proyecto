import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GooglemapsPage } from './googlemaps.page';

@NgModule({
  declarations: [GooglemapsPage],
  imports: [
    CommonModule,
    IonicModule,
  ], exports:[
    GooglemapsPage,
  ]
})
export class GooglemapsPageModule {}
