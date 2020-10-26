import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/entities/mascota';
import { Recordatorio } from 'src/app/entities/recordatorio';
import { MascotasService } from 'src/app/services/mascotas.service';
import { RecordatoriosService } from 'src/app/services/recordatorios.service';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.component.html',
  styleUrls: ['./recordatorios.component.css']
})
export class RecordatoriosComponent implements OnInit {
  @Input() MascotaX: Mascota;

  listaMascotas: Mascota[];
  listaRecordatorios: Recordatorio[];
  mascotaEscogida:Mascota;

  constructor(private recordatoriosService: RecordatoriosService, private mascotasService: MascotasService) { }

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

  seleccionarMascota(mascotaElegida:Mascota){
    this.mascotaEscogida = mascotaElegida;
  }

  leerRecordatoriosxmascota(idmascota):void{
    this.recordatoriosService.recordatoriosxmascotaSelect(idmascota).subscribe(
      (res: Recordatorio[]) => {
        this.listaRecordatorios = res;
      }
    )
  }

}
