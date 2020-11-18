import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Veterinario } from '../entities/veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinariosService {

  veterinarios: Veterinario[];

  constructor(private http: HttpClient) { }

  veterinariosSelect(): Observable<Veterinario[]>{
    const ruta = "http://localhost/serviciomascotadata/veterinarios.php";
    return this.http.post<Veterinario[]>(ruta,null).pipe(
      map((res) => {
        this.veterinarios = JSON.parse(JSON.stringify(res));
        return this.veterinarios;
      })
    )
  }

  veterinariosInsert(foto,nombre,apellido,telefono,empresa,ciudad,pais,calificacion){
    const ruta = "http://localhost/serviciomascotadata/veterinarios_insert.php";

    const formData: FormData = new FormData();
    formData.append("foto",foto);
    formData.append("nombre",nombre);
    formData.append("apellido",apellido);
    formData.append("telefono",telefono);
    formData.append("empresa",empresa);
    formData.append("ciudad",ciudad);
    formData.append("pais",pais);
    formData.append("calificacion",calificacion);

    return this.http.post(ruta,formData).pipe(
      map((res) => {
        return res;
      })
    )
  }

  veterinariosUpdate(idveterinario,foto,nombre,apellido,telefono,empresa,ciudad,pais,calificacion){
    const ruta = "http://localhost/serviciomascotadata/veterinarios_update.php";

    const formData: FormData = new FormData();
    formData.append("idveterinario",idveterinario);
    formData.append("foto",foto);
    formData.append("nombre",nombre);
    formData.append("apellido",apellido);
    formData.append("telefono",telefono);
    formData.append("empresa",empresa);
    formData.append("ciudad",ciudad);
    formData.append("pais",pais);
    formData.append("calificacion",calificacion)

    return this.http.post(ruta,formData);
  }

  veterinariosDelete(idveterinario){
    const ruta = "http://localhost/serviciomascotadata/veterinarios_delete.php";

    const formData: FormData = new FormData();
    formData.append("idveterinario",idveterinario);

    return this.http.post(ruta,formData);
  }
}
