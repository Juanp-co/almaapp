import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

@Component({
  selector: 'app-devocionales-card2',
  templateUrl: './devocionales-card2.component.html',
  styleUrls: ['./devocionales-card2.component.scss'],
})
export class DevocionalesCard2Component implements OnInit {

  @Input() item: any;

  model: any = {
    _id: null,
    picture: null,
    title: null,
    viewed: false,
    sortTitle: null,
    created_at: null,
  };

  constructor(
    private router: Router
  ) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  ngOnInit() {
    if (this.item) {
      this.model._id = this.item._id;
      this.model.title = this.item.title;
      this.model.sortTitle = this.item.title?.length > 25 ? `${this.item.title.substr(0, 25)} ...` : this.item.title;
      this.model.picture = this.item.picture || null;
      this.model.viewed = this.item.viewed || false;
    }
  }

  goTo(id: string) {
    this.router.navigate([`devocionales/${id}`]);
  }

}
