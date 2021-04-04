import { Component, OnInit } from '@angular/core';
import {GruposService} from './grupos.service';
import {ReportarPage} from './reportar/reportar.page';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-grupos-familiares',
  templateUrl: './grupos-familiares.page.html',
  styleUrls: ['./grupos-familiares.page.scss'],
})
export class GruposFamiliaresPage implements OnInit {

  groups: any[] = [];

  constructor(
    private globalSer: GlobalService,
    private gruposService: GruposService,
  ) { }

  async ngOnInit() {
    await this.getData();
  }

  async getData() {
    await this.globalSer.presentLoading('Cargando ...');
    const data = await this.gruposService.getFamiliesGroups();

    if (data) {
      this.groups = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async openModalReport() {
    const content: any = {
      groups: this.groups
    };
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      ReportarPage,
      content,
      false
    );
  }

}
