import {Component, Input, OnInit} from '@angular/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/es';
import {IUserSimpleInfo} from '../../services/global.models';

@Component({
  selector: 'app-personcardtwo',
  templateUrl: './personcardtwo.component.html',
  styleUrls: ['./personcardtwo.component.scss'],
})
export class PersoncardtwoComponent implements OnInit {

  @Input() data: any;
  person: IUserSimpleInfo | null = null;
  comment: string | null = null;
  date: string = null;

  constructor() {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  ngOnInit() {
    if (this.data) {
      this.person = this.data.user;
      this.comment = this.data.comment;
      this.date = dayjs.duration(dayjs(this.data.date).unix()).locale('es').humanize();
    }
  }

}
