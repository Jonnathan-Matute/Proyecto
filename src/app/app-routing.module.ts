import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//autenticacion login
import { AuthGuard } from "./guards/auth.guard";

//no login
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate : [AuthGuard]
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canActivate : [NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule), canActivate : [NologinGuard]

  },
  
  {
    path: 'crear_recordatorio',
    loadChildren: () => import('./recordatorio/recordatorio.module').then( m => m.RecordatorioPageModule)
  },
  {
    path: 'listar-recordatorios',
    loadChildren: () => import('./listar-recordatorios/listar-recordatorios.module').then( m => m.ListarRecordatoriosPageModule)
  },
  {
    path: 'editar-recordatorio',
    loadChildren: () => import('./editar-recordatorio/editar-recordatorio.module').then( m => m.EditarRecordatorioPageModule)
  },
  {
    path: 'listar-detallada',
    loadChildren: () => import('./listar-detallada/listar-detallada.module').then( m => m.ListarDetalladaPageModule)
  },
  {
    path: 'googlemaps',
    loadChildren: () => import('./googlemaps/googlemaps.module').then( m => m.GooglemapsModule)
  }

];

@NgModule({
  /*imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
