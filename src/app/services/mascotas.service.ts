import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mascota } from '../entities/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  mascotas: Mascota[];

  constructor(private http: HttpClient) { }

  mascotasSelect(): Observable<Mascota[]>{
    const ruta = "http://localhost/serviciomascotadata/mascotas.php";
    return this.http.post<Mascota[]>(ruta,null).pipe(
      map((res) => {
        this.mascotas = JSON.parse(JSON.stringify(res));
        return this.mascotas;
      })
    )
  }
}
