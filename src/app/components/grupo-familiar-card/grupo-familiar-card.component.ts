import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grupo-familiar-card',
  templateUrl: './grupo-familiar-card.component.html',
  styleUrls: ['./grupo-familiar-card.component.scss'],
})
export class GrupoFamiliarCardComponent implements OnInit {

  @Input() group: any;
  @Input() select = false;

  constructor() { }

  ngOnInit() {}

}
