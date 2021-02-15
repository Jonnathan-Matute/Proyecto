import { Component, OnInit} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Recordatorio } from '../model/recordatorio';
import { RecordatorioserviceService } from '../services/recordatorioservice.service';
import { FirestorageService } from '../services/firestorage.service';
import { ModalController } from '@ionic/angular';
import { GooglemapsComponent } from '../googlemaps/googlemaps.component';
import { GooglemapsService } from '../services/googlemaps.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-recordatorio',
  templateUrl: './recordatorio.page.html',
  styleUrls: ['./recordatorio.page.scss'],
})
export class RecordatorioPage implements OnInit {

  recor: Recordatorio={
    uid: this.afs.createId(),
    titulo: "",
    t_actividad: "",
    actividad: "",
    fecha: null,
    hora: null,
    ubicacion:null,
    deleted: false,
    fotoUrl: ""
  }
  
  newImage='';
  newFile='';
  
  constructor(private modalController: ModalController, public firestorageService: FirestorageService,  private route: ActivatedRoute, private router: Router,
    public recordatorioService: RecordatorioserviceService, private storage: AngularFireStorage,private gs:GooglemapsService,private afs:AngularFirestore ) {

    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (this.router.getCurrentNavigation().extras.queryParams) {
        this.recor = this.router.getCurrentNavigation().extras.queryParams.recordatorio;
        
      }
    });
  }

  ngOnInit() {}

  async addDirection(){
    const ubicacion = this.recor.ubicacion
    let positionInput = {
      lat: -2.898116,
      lng: -78.99958149999999
    };
    if(ubicacion!== null){
      positionInput =  ubicacion;
    }

    const modalAdd = await this.modalController.create({
      component: GooglemapsComponent,
      componentProps: {position: positionInput}
    });

    await modalAdd.present();
    const {data} = await modalAdd.onWillDismiss();
    if(data){
      console.log('data -> ', data);
      this.recor.ubicacion =  data.pos;
      console.log('This.cliente -> ', this.recor);
    }
  }

  //guardar demas

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
        
        //this.recor.fotoUrl = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  
 
}
