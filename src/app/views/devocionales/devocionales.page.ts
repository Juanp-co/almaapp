import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';
import {DevocionalesService} from './devocionales.service';
import {GlobalService} from '../../services/global.service';
import {StorageService} from '../../services/storage.service';
import {Router} from '@angular/router';

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
  isAdmin = false;
  queryParams: any = {
    limit: 10,
    page: 1,
    input: 'created_at',
    value: -1,
    initDate: null,
    endDate: null,
    search: null
  };

  constructor(
    private devocionalesService: DevocionalesService,
    private globalSer: GlobalService,
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.isAdmin = await this.globalSer.checkRoleToActions([0, 1, 2]);
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
    const data: any[] = await this.devocionalesService.getDevotionals(this.queryParams);
    await this.checkViewed(data);
  }

  async loadData(event: any = null) {

    if (this.devotionals?.length !== this.totals && this.queryParams.page < this.pages) {
      const newPage = this.queryParams.page + 1;
      if (newPage <= this.pages) {
        this.queryParams.page = newPage;
        await this.getDevotionals();
        event.target.disabled = newPage === this.pages;
        event.target.complete();
      }
    }
    else {
      event.target.disabled = true;
      event.target.complete();
    }
  }

  async checkViewed(data: any[]) {
    const list: string[] = await this.storageService.get('devotionals_ids') || [];
    const d = [...this.devotionals, ...data];

    data?.forEach((v: any) => {
      if (!v.viewed) v.viewed = !!list.includes(v._id);
    });

    this.devotionals = d.sort((a: any, b: any) => {
      if (a.viewed > b.viewed) return 1;
      if (a.viewed < b.viewed) return -1;
      return 0;
    });
  }

  async goToAdd() {
    await this.router.navigate([`/devocionales/crear`]);
  }

}
