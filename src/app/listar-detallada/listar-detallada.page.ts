import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ListaRecordatoriosService } from '../services/lista-recordatorios.service';

@Component({
  selector: 'app-listar-detallada',
  templateUrl: './listar-detallada.page.html',
  styleUrls: ['./listar-detallada.page.scss'],
})
export class ListarDetalladaPage implements OnInit {

  recor:any[];

  constructor(
    private ObtenerRecordatorio: ListaRecordatoriosService,
    private route: ActivatedRoute, private router: Router,
  ) { }

  ngOnInit() {
   
    
  }
  volver(){
    

    this.router.navigate(['/listar-detallada']);
  }
  

}
