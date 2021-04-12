import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-visitscard',
  templateUrl: './visitscard.component.html',
  styleUrls: ['./visitscard.component.scss'],
})
export class VisitscardComponent implements OnInit {

  @Input() visit: any;
  @Input() index: number;

  constructor() { }

  ngOnInit() {}

}
