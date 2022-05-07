import {Component, Input, OnInit} from '@angular/core';
import {GlobalService} from '../../../services/global.service';

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

  church: any;

  constructor() {}

  ngOnInit() {
    if (this.data) {
      this.church = Object.assign({}, this.data);
      if (this.enableClick) {
        if (this.church.description?.length > 50) {
          this.church.description = `${this.church.description.substr(0, 50)} ...`;
        }
      }
    }
  }

  handleClickAction() {
    if (this.enableClick) this.handleClick(this.index);
  }

}
