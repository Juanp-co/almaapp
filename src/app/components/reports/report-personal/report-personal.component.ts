import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-report-personal',
  templateUrl: './report-personal.component.html',
  styleUrls: ['./report-personal.component.scss'],
})
export class ReportPersonalComponent implements OnInit {

  @Input() data: any = null;

  constructor() { }

  ngOnInit() {}

}
