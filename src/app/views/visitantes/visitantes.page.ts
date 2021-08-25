import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitantes',
  templateUrl: './visitantes.page.html',
  styleUrls: ['./visitantes.page.scss'],
})
export class VisitantesPage implements OnInit {

  list1 = [
    {},{},{}
  ]
  list2 = [
    {},{},{}
  ]
  opciones = [
    { titulo: 'Red padres', imagen: 'assets/icon/red.svg', url: 'padres' },
    { titulo: 'Ofrendas', imagen: 'assets/icon/ofrenda.svg', url: 'ofrenda' },
    { titulo: 'Escuela', imagen: 'assets/icon/escuela.svg', url: 'escuela' },
    { titulo: 'Reportes', imagen: 'assets/icon/reportes.svg', url: 'estadistica' },
    { titulo: 'Eventos', imagen: 'assets/icon/calendario.svg', url: 'eventos' },
    { titulo: 'Salir', imagen: 'assets/icon/logout.svg', url: null }
  ];

  constructor() { }

  ngOnInit() {
  }

}
