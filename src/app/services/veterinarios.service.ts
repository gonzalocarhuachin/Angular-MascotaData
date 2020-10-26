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
}
