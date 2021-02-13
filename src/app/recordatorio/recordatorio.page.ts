import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Recordatorio } from '../model/recordatorio';
import { RecordatorioserviceService } from '../services/recordatorioservice.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestorageService } from '../services/firestorage.service';


@Component({
  selector: 'app-recordatorio',
  templateUrl: './recordatorio.page.html',
  styleUrls: ['./recordatorio.page.scss'],
})
export class RecordatorioPage implements OnInit {

  recor: Recordatorio = new Recordatorio();
  
  newImage='';
  newFile='';
  
  constructor(public firestorageService: FirestorageService,  private route: ActivatedRoute, private router: Router,
    public recordatorioService: RecordatorioserviceService,private storage: AngularFireStorage, private database: AngularFirestore) {

    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (this.router.getCurrentNavigation().extras.queryParams) {
        this.recor = this.router.getCurrentNavigation().extras.queryParams.recordatorio;
        
      }
    });
  }

  ngOnInit() {
  }

  async guardar(){
    console.log(this.recor);
    const path = 'Recordatorios';
    const name = this.recor.actividad;
    const res = await this.firestorageService.uploadImage(this.newFile, path,name)
    this.recor.fotoUrl = res;
    this.recordatorioService.saveRecordatorio(this.recor);
 
    let navigationExtras: NavigationExtras = {
      queryParams: {
        recordatorio: this.recor
      }
    };

    this.router.navigate(['/listar-recordatorios'], navigationExtras);
  }

  

  async newImageUpload(event:any){
    if (event.target.files && event.target.files[0]){
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image)=> {
        this.recor.fotoUrl = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }
 
}
