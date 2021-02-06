import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarRecordatoriosPage } from './listar-recordatorios.page';

const routes: Routes = [
  {
    path: '',
    component: ListarRecordatoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarRecordatoriosPageRoutingModule {}
