import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-barra-seccion',
  templateUrl: './barra-seccion.component.html',
  styleUrls: ['./barra-seccion.component.scss'],
})
export class BarraSeccionComponent implements OnInit {

  @Input() label: any;
  @Input() index: any;
  @Input() handleClick1: (value: any) => void;
  @Input() handleClick2: (index: any) => void;

  constructor() { }

  ngOnInit() {}

  handleClick() {
    if (this.handleClick1) this.handleClick1(null);
    if (this.index !== undefined) this.handleClick2(this.index);
  }
}
