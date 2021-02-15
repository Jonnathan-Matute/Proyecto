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
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
declare var google;
@Component({
  selector: 'app-recordatorio',
  templateUrl: './recordatorio.page.html',
  styleUrls: ['./recordatorio.page.scss'],
})
export class RecordatorioPage implements OnInit {
  mapRef = null;
  recor: Recordatorio = new Recordatorio();
  
  newImage='';
  newFile='';
  
  constructor(public firestorageService: FirestorageService,  private route: ActivatedRoute, private router: Router,
    public recordatorioService: RecordatorioserviceService,private geolocation:Geolocation,private loadingCtrl: LoadingController, private storage: AngularFireStorage, private database: AngularFirestore) {

    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (this.router.getCurrentNavigation().extras.queryParams) {
        this.recor = this.router.getCurrentNavigation().extras.queryParams.recordatorio;
        
      }
    });
  }

  

  ngOnInit() {
    this.loadMap();
  }

  //guardar mapa
  async loadMap() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng = await this.getLocation();
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
      loading.dismiss();
      this.addMaker(myLatLng.lat, myLatLng.lng);
    });
  }

  private addMaker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title: 'Hello World!'
    });
  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
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
        this.recor.fotoUrl = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  
 
}
