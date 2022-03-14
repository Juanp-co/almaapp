import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-group-item-list',
  templateUrl: './group-item-list.component.html',
  styleUrls: ['./group-item-list.component.scss'],
})
export class GroupItemListComponent implements OnInit {

  @Input() list: any[] = [];
  @Input() keyItem: any;
  @Input() label: string;
  @Input() simpleValue = false;
  @Input() handleClick: (item: any) => void;

  constructor() { }

  ngOnInit() {}

}
