import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ListaRecordatoriosService } from '../services/lista-recordatorios.service';
import {RecordatorioserviceService} from '../services/recordatorioservice.service';
import { Recordatorio } from '../model/recordatorio';
@Component({
  selector: 'app-listar-detallada',
  templateUrl: './listar-detallada.page.html',
  styleUrls: ['./listar-detallada.page.scss'],
})
export class ListarDetalladaPage implements OnInit {

  actividadId;
  actividad;
  recor:any[];

  constructor(
    private ObtenerRecordatorio: ListaRecordatoriosService,
    private route: ActivatedRoute, private router: Router,private recordatorioServicio:RecordatorioserviceService,
  ) { }

  ngOnInit() {
   
    this.cargarDetalleActividad()
  }
  volver(){
    this.router.navigate(['/listar-recordatorios']);
  }

  async cargarDetalleActividad(){
    await this.route.params.subscribe(params =>{
      this.actividadId=params.uid;
    });
    
    await this.recordatorioServicio.getRecordatorioById(this.actividadId).subscribe(
      res =>{
        console.log("esto llega")
        console.log(res)
        this.actividad =res.docs[0].data() as Recordatorio
      }

    )
    
  }

  

  

}
