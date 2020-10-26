import { Component, OnInit } from '@angular/core';
import { Veterinario } from 'src/app/entities/veterinario';
import { VeterinariosService } from 'src/app/services/veterinarios.service';

@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.component.html',
  styleUrls: ['./veterinarios.component.css']
})
export class VeterinariosComponent implements OnInit {
  listaVeterinarios: Veterinario[];

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

}
