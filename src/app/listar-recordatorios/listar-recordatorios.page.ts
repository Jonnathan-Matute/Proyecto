import { Component, OnInit } from '@angular/core';
import { ListaRecordatoriosService } from '../services/lista-recordatorios.service';

import { RecordatorioserviceService } from '../services/recordatorioservice.service';

import { Recordatorio } from '../model/recordatorio';
import { NavigationExtras, Router } from '@angular/router';
import { NotificacionesService } from '../services/notificaciones.service';
@Component({
  selector: 'app-listar-recordatorios',
  templateUrl: './listar-recordatorios.page.html',
  styleUrls: ['./listar-recordatorios.page.scss'],
})
export class ListarRecordatoriosPage implements OnInit {

  recor:any[];

  constructor(
    private ObtenerRecordatorio: RecordatorioserviceService,public router: Router,public notificacionesService: NotificacionesService
  ) { }

  ngOnInit() {
    this.recuperarRecordatorios();
    
  }

  recuperarRecordatorios() {

    
    this.ObtenerRecordatorio.ObtenerRecordatorio().subscribe(
      respuesta => {
        console.log("listar",respuesta);
        this.recor=respuesta;
      }
    )

    
  }
  editarRecordatorio(recordatorio: Recordatorio){

    let navigationExtras: NavigationExtras = {
      queryParams: {
        recordatorio: recordatorio
      }
    };

    this.router.navigate(['/crear_recordatorio'], navigationExtras);
  }

  async borrarRecordatorio(uid: string){
    this.ObtenerRecordatorio.borrarRecor(uid);
    this.notificacionesService.notificacionToast("Registro borrado");
  }

  async confirmarBorrado(uid: string) {
    this.notificacionesService.confirmacion(
        "Confirmar", 
        "Esta seguro de borrar", 
        this.borrarRecordatorio.bind(this, uid));
  }

/*
  eliminarRecordatorios(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.eliminarRecordatorio(id)
    }
  }
*/
}
