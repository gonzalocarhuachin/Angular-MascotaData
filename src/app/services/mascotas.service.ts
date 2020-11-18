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

  mascotasInsert(foto,nombre,especie,raza,fechanacimiento,descripcion){
    const ruta = "http://localhost/serviciomascotadata/mascotas_insert.php";

    const formData: FormData = new FormData();
    formData.append("foto",foto);
    formData.append("nombre",nombre);
    formData.append("especie",especie);
    formData.append("raza",raza);
    formData.append("fechanacimiento",fechanacimiento);
    formData.append("descripcion",descripcion);

    return this.http.post(ruta,formData).pipe(
      map((res) => {
        return res;
      })
    )
  }

  mascotasUpdate(idmascota,foto,nombre,especie,raza,fechanacimiento,descripcion){
    const ruta = "http://localhost/serviciomascotadata/mascotas_update.php";

    const formData: FormData = new FormData();
    formData.append("idmascota",idmascota);
    formData.append("foto",foto);
    formData.append("nombre",nombre);
    formData.append("especie",especie);
    formData.append("raza",raza);
    formData.append("fechanacimiento",fechanacimiento);
    formData.append("descripcion",descripcion);

    return this.http.post(ruta,formData);
  }

  mascotasDelete(idmascota){
    const ruta = "http://localhost/serviciomascotadata/mascotas_delete.php";

    const formData: FormData = new FormData();
    formData.append("idmascota",idmascota);

    return this.http.post(ruta,formData);
  }
}
