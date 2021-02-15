import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recordatorio } from '../model/recordatorio';
@Injectable({
  providedIn: 'root'
})
export class ListaRecordatoriosService {

  
  constructor(private db: AngularFirestore) { }

 

 
/*
  // Update
  actualizarRecordatorio(id, apt: Recordatorio) {
    return this.recordatorioRef.update({
      titulo: apt.t_actividad,
      actividad: apt.actividad,
      fecha: apt.fecha,
      hora: apt.hora,
      direccion: apt.Direccion,
      deleted: apt.deleted
    })
  }
  
  // Delete
  eliminarRecordatorio(id: string) {
    this.recordatorioRef = this.db.object('/recordatorios/' + id);
    this.recordatorioRef.remove();
  }*/
}
