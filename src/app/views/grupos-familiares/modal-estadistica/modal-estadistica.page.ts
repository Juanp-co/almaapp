import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import dayjs from 'dayjs';
import {GruposService} from '../grupos.service';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-modal-estadistica',
  templateUrl: './modal-estadistica.page.html',
  styleUrls: ['./modal-estadistica.page.scss'],
})
export class ModalEstadisticaPage implements OnInit {

  @Input() data;
  showFilter = false;
  queryParams: any = {
    initDate: null,
    endDate: null,
  };
  report: any = null;
  minInitDate: string = dayjs('2021-01-01').format('YYYY-MM-DD');
  maxInitDate: string = dayjs().format('YYYY-MM-DD');
  minEndDate: string = dayjs('2021-01-01').format('YYYY-MM-DD');
  maxEndDate: string = dayjs().format('YYYY-MM-DD');

  constructor(
    private globalSer: GlobalService,
    private gruposService: GruposService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    if (this.data) this.getData();
  }

  async getData() {
    await this.globalSer.presentLoading();
    this.report = null;
    const data: any = await this.gruposService.getReports(this.data._id, this.queryParams);

    if (data && !data.error) {
      this.report = {
        _id: this.data._id,
        groupName: `S: ${this.data.number} - SS: ${this.data.subSector} - Nº: ${this.data.number}`,
        ...data
      };
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
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

    if (find) this.getData();
    else this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar una fecha inicial');
  }

  resetQueryParams() {
    this.setShowFilter();
    if (this.queryParams.initDate || this.queryParams.endDate) {
      this.queryParams.initDate = null;
      this.queryParams.endDate = null;
      this.getData();
    }
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  setShowFilter() {
    this.showFilter = !this.showFilter;
  }

}
