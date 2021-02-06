import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Recordatorio } from '../model/recordatorio';
import { RecordatorioserviceService } from '../services/recordatorioservice.service';

@Component({
  selector: 'app-recordatorio',
  templateUrl: './recordatorio.page.html',
  styleUrls: ['./recordatorio.page.scss'],
})
export class RecordatorioPage implements OnInit {

  recor: Recordatorio = new Recordatorio();
  
  constructor(private route: ActivatedRoute, private router: Router,
    public recordatorioService: RecordatorioserviceService) { 

    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (this.router.getCurrentNavigation().extras.queryParams) {
        this.recor = this.router.getCurrentNavigation().extras.queryParams.recordatorio;
        
      }
    });
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.recor);

    this.recordatorioService.saveRecordatorio(this.recor);
 
    let navigationExtras: NavigationExtras = {
      queryParams: {
        recordatorio: this.recor
      }
    };

    this.router.navigate(['/listar-recordatorios'], navigationExtras);
  }
}
