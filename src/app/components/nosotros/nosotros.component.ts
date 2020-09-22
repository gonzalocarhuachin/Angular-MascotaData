import { Component, OnInit } from '@angular/core';
import { VENTAJAS } from 'src/app/entities/ventajas';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  listaVentajas = VENTAJAS;
  constructor() { }

  ngOnInit(): void {
  }

}
