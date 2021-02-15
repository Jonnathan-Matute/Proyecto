import { NumericValueAccessor } from "@ionic/angular";

export class Recordatorio {
    uid: string;
    titulo: string;
    t_actividad: string;
    actividad: string;
    fecha: Date;
    hora: Date;
    ubicacion:{
        lat: number;
        lng: number;
    };
    deleted: boolean;
    fotoUrl: string;
}