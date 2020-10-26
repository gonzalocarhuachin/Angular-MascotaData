import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarios: Usuario[];

  constructor(private http: HttpClient) { }

  usuariosSelect(): Observable<Usuario[]>{
    const ruta = "http://localhost/serviciomascotadata/usuarios.php";
    return this.http.post<Usuario[]>(ruta,null).pipe(
      map((res) => {
        this.usuarios = JSON.parse(JSON.stringify(res));
        return this.usuarios;
      })
    )
  }
}
