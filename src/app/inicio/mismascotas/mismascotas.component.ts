import { Component, OnInit } from '@angular/core';
import { MISMASCOTAS } from 'src/app/entities/mismascotas';

@Component({
  selector: 'app-mismascotas',
  templateUrl: './mismascotas.component.html',
  styleUrls: ['./mismascotas.component.css']
})
export class MismascotasComponent implements OnInit {

  listaMascotas = MISMASCOTAS;
  constructor() { }

  ngOnInit(): void {
  }

}
