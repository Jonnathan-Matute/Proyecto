import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarDetalladaPage } from './listar-detallada.page';

const routes: Routes = [
  {
    path: '',
    component: ListarDetalladaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarDetalladaPageRoutingModule {}
