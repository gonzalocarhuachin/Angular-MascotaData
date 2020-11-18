import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Mascota } from 'src/app/entities/mascota';
import { MascotasService } from 'src/app/services/mascotas.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
declare var $:any; //Habilitar el selector $ de Jquery

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  listaMascotas: Mascota[];

  mascotasAgregarForm = new FormGroup({
    foto: new FormControl(),
    nombre: new FormControl(),
    especie: new FormControl(),
    raza: new FormControl(),
    fechanacimiento: new FormControl(),
    descripcion: new FormControl()
  });

  nuevaMascota: any = {};
  faEdit = faEdit;
  faTimes = faTimes;

  mascotasActualizarForm = new FormGroup({
    idmascota: new FormControl(),
    foto: new FormControl(),
    nombre: new FormControl(),
    especie: new FormControl(),
    raza: new FormControl(),
    fechanacimiento: new FormControl(),
    descripcion: new FormControl()
  });

  mascotaActualizar: Mascota;

  constructor(private mascotasService: MascotasService) { }

  ngOnInit(): void {
    this.leerMascotas();
  }

  leerMascotas():void{
    this.mascotasService.mascotasSelect().subscribe(
      (res: Mascota[]) => {
        this.listaMascotas = res;
      }
    )
  }

  mostrarFormularioAgregar(){
    $("#formulario-agregar").slideDown("slow");
  }

  cerrarFormularioAgregar(){
    $("#formulario-agregar").slideUp("slow");
  }

  agregarMascota(values){
    console.log(values);
    this.mascotasService.mascotasInsert(values.foto,values.nombre,values.especie,values.raza,values.fechanacimiento,values.descripcion).subscribe(
      (res) => {
        console.log(res);
        this.nuevaMascota = {
          idmascota: res,
          foto: values.foto,
          nombre: values.nombre,
          especie: values.especie,
          raza: values.raza,
          fechanacimiento: values.fechanacimiento,
          descripcion: values.descripcion,
        }
        this.listaMascotas.push(this.nuevaMascota);
        this.mascotasAgregarForm.reset();
        $("#formulario-agregar").slideUp("slow");
      }
    )
  }

  seleccionar(itemMascota: Mascota){
    console.log(itemMascota);
    this.mascotaActualizar = itemMascota;
    $('#formulario-actualizar').modal('show');
  }

  eliminar(itemMascota: Mascota){
    var respuesta = confirm("Esta seguro que desea eliminar la mascota " + itemMascota.nombre + "?");
    if (respuesta == true) {
      this.mascotasService.mascotasDelete(itemMascota.idmascota).subscribe();
      this.listaMascotas = this.listaMascotas.filter(
        item => item.idmascota !== itemMascota.idmascota
      );
      alert("Se ha eliminado la mascota " + itemMascota.nombre);
    }
  }

  actualizarMascota(values){
    console.log(values);
    this.mascotasService.mascotasUpdate(
      values.idmascota,values.foto,values.nombre,values.especie,values.raza,values.fechanacimiento,values.descripcion).subscribe();
      alert("Se ha actualizadp la mascota de codigo: "+ values.idmascota);
      $('#formulario-actualizar').modal('hide');
  }

}
