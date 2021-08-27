import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';
import dayjs from 'dayjs';
import {DevocionalesService} from './devocionales.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-devocionales',
  templateUrl: './devocionales.page.html',
  styleUrls: ['./devocionales.page.scss'],
})
export class DevocionalesPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  devotionals: any = [];
  totals = 0;
  pages = 0;
  queryParams: any = {
    limit: 5,
    page: 1,
    input: 'created_at',
    value: -1,
    initDate: null,
    endDate: null,
    search: null
  };

  constructor(
    private devocionalesService: DevocionalesService,
    private globalSer: GlobalService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getTotalsDevotionals();
  }

  async getTotalsDevotionals() {
    this.queryParams.page = 1;
    this.totals = await this.devocionalesService.getTotalsDevotionals(this.queryParams);
    this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
    if (this.totals > 0) {
      this.devotionals = [];
      this.getDevotionals();
    }
    else this.devotionals = [];
  }

  async getDevotionals() {
    const data: any = await this.devocionalesService.getDevotionals(this.queryParams);
    this.devotionals = [...this.devotionals, ...data];
  }

  async loadData(event: any = null) {
    const newPage = this.queryParams.page + 1;
    if (newPage <= this.pages) {
      this.queryParams.page = newPage;
      await this.getDevotionals();
      // event.target.complete();
      event.target.disabled = true;
    }
  }

}
