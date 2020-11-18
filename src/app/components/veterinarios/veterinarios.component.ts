import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Veterinario } from 'src/app/entities/veterinario';
import { VeterinariosService } from 'src/app/services/veterinarios.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
declare var $:any; //Habilitar el selector $ de Jquery

@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.component.html',
  styleUrls: ['./veterinarios.component.css']
})
export class VeterinariosComponent implements OnInit {
  listaVeterinarios: Veterinario[];

  veterinariosAgregarForm = new FormGroup({
    foto: new FormControl(),
    nombre: new FormControl(),
    apellido: new FormControl(),
    telefono: new FormControl(),
    empresa: new FormControl(),
    ciudad: new FormControl(),
    pais: new FormControl(),
    calificacion: new FormControl()
  });

  nuevoVeterinario: any = {};
  faEdit = faEdit;
  faTimes = faTimes;

  veterinariosActualizarForm = new FormGroup({
    idveterinario: new FormControl(),
    foto: new FormControl(),
    nombre: new FormControl(),
    apellido: new FormControl(),
    telefono: new FormControl(),
    empresa: new FormControl(),
    ciudad: new FormControl(),
    pais: new FormControl(),
    calificacion: new FormControl()
  });

  veterinarioActualizar: Veterinario;

  constructor(private veterinariosService: VeterinariosService) { }

  ngOnInit(): void {
    this.leerVeterinarios();
  }

  leerVeterinarios():void{
    this.veterinariosService.veterinariosSelect().subscribe(
      (res: Veterinario[]) => {
        this.listaVeterinarios = res;
      }
    )
  }

  mostrarFormularioAgregar(){
    $("#formulario-agregar").slideDown("slow");
  }

  cerrarFormularioAgregar(){
    $("#formulario-agregar").slideUp("slow");
  }

  agregarVeterinario(values){
    console.log(values);
    this.veterinariosService.veterinariosInsert(values.foto,values.nombre,values.apellido,values.telefono,values.empresa,values.ciudad,values.pais,values.calificacion).subscribe(
      (res) => {
        console.log(res);
        this.nuevoVeterinario = {
          idveterinario: res,
          foto: values.foto,
          nombre: values.nombre,
          apellido: values.apellido,
          telefono: values.telefono,
          empresa: values.empresa,
          ciudad: values.ciudad,
          pais: values.pais,
          calificacion: values.calificacion
        }
        this.listaVeterinarios.push(this.nuevoVeterinario);
        this.veterinariosAgregarForm.reset();
        $("#formulario-agregar").slideUp("slow");
      }
    )
  }

  seleccionar(itemVeterinario: Veterinario){
    console.log(itemVeterinario);
    this.veterinarioActualizar = itemVeterinario;
    $('#formulario-actualizar').modal('show');
  }

  eliminar(itemVeterinario: Veterinario){
    var respuesta = confirm("Esta seguro que desea eliminar al veterinario " + itemVeterinario.nombre + "?");
    if (respuesta == true) {
      this.veterinariosService.veterinariosDelete(itemVeterinario.idveterinario).subscribe();
      this.listaVeterinarios = this.listaVeterinarios.filter(
        item => item.idveterinario !== itemVeterinario.idveterinario
      );
      alert("Se ha eliminado al veterinario " + itemVeterinario.nombre);
    }
  }

  actualizarVeterinario(values){
    console.log(values);
    this.veterinariosService.veterinariosUpdate(
      values.idveterinario,values.foto,values.nombre,values.apellido,values.telefono,values.empresa,values.ciudad,values.pais,values.calificacion).subscribe();
      alert("Se ha actualizadp al veterinario de codigo: "+ values.idveterinario);
      $('#formulario-actualizar').modal('hide');
  }

}
