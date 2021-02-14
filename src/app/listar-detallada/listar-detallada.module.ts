import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarDetalladaPageRoutingModule } from './listar-detallada-routing.module';

import { ListarDetalladaPage } from './listar-detallada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDetalladaPageRoutingModule
  ],
  declarations: [ListarDetalladaPage]
})
export class ListarDetalladaPageModule {}
