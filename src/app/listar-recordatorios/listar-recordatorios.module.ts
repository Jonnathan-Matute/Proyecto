import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarRecordatoriosPageRoutingModule } from './listar-recordatorios-routing.module';

import { ListarRecordatoriosPage } from './listar-recordatorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarRecordatoriosPageRoutingModule
  ],
  declarations: [ListarRecordatoriosPage]
})
export class ListarRecordatoriosPageModule {}
