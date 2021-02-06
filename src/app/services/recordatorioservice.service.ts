import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Recordatorio } from '../model/recordatorio';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordatorioserviceService {

  constructor(public afs: AngularFirestore) { }

  saveRecordatorio(recordatorio: Recordatorio){
    const refRecordatorio = this.afs.collection("recordatorios");
    if(recordatorio.uid==null){
      recordatorio.uid = this.afs.createId();
      recordatorio.deleted = false;
    }
      

    refRecordatorio.doc(recordatorio.uid).set(Object.assign({}, recordatorio), { merge: true})
  }

  getRecordatorio(): Observable<any[]>{
    return this.afs.collection("recordatorios",
            ref => ref.where("deleted", "==", false)).valueChanges();
  }

  async getRecordatorioById(uid: string){
    try{
        let aux = await this.afs.collection("recordatorios", 
            ref => ref.where('uid', '==', uid))
                      .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                          return doc;
                      }).catch(error => {
                          throw error;
                      });
        if(aux==null)
            return {};
        return aux[0];
    }catch(error){
      console.error("Error get recordatorios ById", error);
      throw error;
    } 
  }

  getRecordatorioById2(uid: string) :Observable<any>{
    return this.afs.collection("recordatorios", 
            ref => ref.where('uid', '==', uid))
                      .valueChanges();
  }

  borrarRecordatorio(uid: string){
    const refRecordatorio = this.afs.collection("recordatorios");
    
    const aux = {deleted: true};
    refRecordatorio.doc(uid).set( {...aux}, { merge: true})
  }
}
