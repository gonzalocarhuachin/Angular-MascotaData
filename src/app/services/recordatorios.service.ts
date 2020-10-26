import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recordatorio } from '../entities/recordatorio';

@Injectable({
  providedIn: 'root'
})
export class RecordatoriosService {

  recordatorios: Recordatorio[];

  constructor(private http: HttpClient) { }

  recordatoriosxmascotaSelect(idmascota): Observable<Recordatorio[]>{
    const ruta = "http://localhost/serviciomascotadata/recordatoriosxmascota.php";
    const formData: FormData = new FormData();
    formData.append("caty",idmascota);

    return this.http.post<Recordatorio[]>(ruta,formData).pipe(
      map((res) => {
        this.recordatorios = JSON.parse(JSON.stringify(res));
        return this.recordatorios;
      })
    )
  }
}
