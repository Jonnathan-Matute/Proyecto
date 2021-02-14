import { Component, OnInit } from '@angular/core';
import { ListaRecordatoriosService } from '../services/lista-recordatorios.service';
@Component({
  selector: 'app-listar-recordatorios',
  templateUrl: './listar-recordatorios.page.html',
  styleUrls: ['./listar-recordatorios.page.scss'],
})
export class ListarRecordatoriosPage implements OnInit {

  recor:any[];

  constructor(
    private ObtenerRecordatorio: ListaRecordatoriosService
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
/*
  eliminarRecordatorios(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.eliminarRecordatorio(id)
    }
  }
*/
}
