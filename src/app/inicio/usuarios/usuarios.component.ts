import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entities/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listaUsuarios: Usuario[];
  usuariosFilter: any = { nombre: '' };

  faChevronUp = faChevronUp
  faChevronDown = faChevronDown

  order: string = 'nombre';
  reverse:boolean = false;

  numeroPagina: number = 1;

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

  setOrder(value: string){
    if(this.order === value){
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

}
