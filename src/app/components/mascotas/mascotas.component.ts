import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/entities/mascota';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  listaMascotas: Mascota[];

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

}
