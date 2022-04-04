import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-iglesia-card',
  templateUrl: './iglesia-card.component.html',
  styleUrls: ['./iglesia-card.component.scss'],
})
export class IglesiaCardComponent implements OnInit {

  @Input() data: any;
  @Input() index = -1;
  @Input() enableClick = false;
  @Input() extendData = false;
  @Input() handleClick: (index: any) => void;

  constructor() { }

  ngOnInit() {}

  handleClickAction() {
    if (this.enableClick) this.handleClick(this.index);
  }

}
