import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-group-item-location',
  templateUrl: './group-item-location.component.html',
  styleUrls: ['./group-item-location.component.scss'],
})
export class GroupItemLocationComponent implements OnInit {

  @Input() data: any = null;

  constructor() { }

  ngOnInit() {}

}
