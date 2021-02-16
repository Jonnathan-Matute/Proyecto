import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Recordatorio } from '../model/recordatorio';
import { first } from 'rxjs/operators';

import { Geofence } from '@ionic-native/geofence/ngx';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioserviceService {

  Lat;
  long;
  tit;
  act;
  constructor(public afs: AngularFirestore,private geofence: Geofence) {

    geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log('Iniciando Georeferenciacion'),
      (err) => console.log(err)
    )
   }

  saveRecordatorio(recordatorio: Recordatorio){
    this.Lat=recordatorio.ubicacion.lat
    this.long=recordatorio.ubicacion.lng
    this.tit=recordatorio.titulo
    this.act=recordatorio.actividad
    const refRecordatorio = this.afs.collection("recordatorios");
    if(recordatorio.uid==null){
      recordatorio.uid = this.afs.createId();
      recordatorio.deleted = false;
    }
      

    refRecordatorio.doc(recordatorio.uid).set(Object.assign({}, recordatorio), { merge: true})
  }

  ObtenerRecordatorio() {
    console.log("esto me devuelve la base")
    console.log(this.afs.collection("recordatorios").valueChanges())
    return this.afs.collection("recordatorios",
      ref => ref.where("deleted", "==", false)).valueChanges();
    
    
  }

  getRecordatorio(): Observable<any[]>{
    return this.afs.collection("recordatorios",
            ref => ref.where("deleted", "==", false)).valueChanges();
  }

  getRecordatorioById(uid: string){
    return this.afs.collection('recordatorios',res => res.where('uid','==',uid)).get();
    
  }

  getRecordatorioById2(uid: string) :Observable<any>{
    return this.afs.collection("recordatorios", 
            ref => ref.where('uid', '==', uid))
                      .valueChanges();
  }

  borrarRecor(uid: string){
    console.log("esto hace al borrar")
    const refRecordatorio = this.afs.collection("recordatorios");
    
    const aux = {deleted: true};
    refRecordatorio.doc(uid).set( {...aux}, { merge: true})
  }
  private addGeofence() {
    //options describing geofence
    let fence = {
      id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', //any unique ID
      latitude:       this.Lat, //center of geofence radius
      longitude:      this.long,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          this.tit, //notification title
          text:           this.act, //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
  
    this.geofence.addOrUpdate(fence).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );
  }
}
