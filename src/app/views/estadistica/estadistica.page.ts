import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import {Router} from '@angular/router';
import {EstadisticaService} from './estadistica.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.page.html',
  styleUrls: ['./estadistica.page.scss'],
})
export class EstadisticaPage implements OnInit {
  data: any = null;
  showFilter = false;
  minInitDate: string = dayjs('2021-01-01').format('YYYY-MM-DD');
  maxInitDate: string = dayjs().format('YYYY-MM-DD');
  minEndDate: string = dayjs('2021-01-01').format('YYYY-MM-DD');
  maxEndDate: string = dayjs().format('YYYY-MM-DD');
  queryParams: any = {
    initDate: null,
    endDate: null,
  };

  constructor(
    private globalSer: GlobalService,
    private estadisticaService: EstadisticaService,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/']);
  }

  async ngOnInit() {
    await this.getData();
  }

  async getData() {
    await this.globalSer.presentLoading();

    const data = await this.estadisticaService.getReports(this.queryParams);

    if (data && !data.error) {
      this.data = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setShowFilter() {
    this.showFilter = !this.showFilter;
  }

  async resetQueryParams() {
    this.queryParams.initDate = null;
    this.queryParams.endDate = null;
    this.showFilter = !this.showFilter;

    this.data = null;
    await this.getData();
  }

  async findData() {
    let find = false;
    if (this.queryParams.initDate) {
      this.queryParams.initDate = dayjs(this.queryParams.initDate).format('YYYY-MM-DD');
      find = true;
    }
    if (this.queryParams.endDate) {
      this.queryParams.endDate = dayjs(this.queryParams.endDate).format('YYYY-MM-DD');
      find = this.queryParams.initDate !== null;
    }

    if (find) {
      this.data = null;
      await this.getData();
    }
    else this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar una fecha inicial');
  }

}
