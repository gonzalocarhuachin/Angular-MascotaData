import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entities/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listaUsuarios: Usuario[];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.leerUsuarios();
  }

  leerUsuarios():void{
    this.usuariosService.usuariosSelect().subscribe(
      (res: Usuario[]) => {
        this.listaUsuarios = res;
      }
    )
  }

}
