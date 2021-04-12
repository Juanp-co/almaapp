import { Component, OnInit } from '@angular/core';
import {OfrendaService} from './ofrenda.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-ofrenda',
  templateUrl: './ofrenda.page.html',
  styleUrls: ['./ofrenda.page.scss'],
})
export class OfrendaPage implements OnInit {

  banks: any[] = [];

  constructor(
    private globalSer: GlobalService,
    private ofrendaService: OfrendaService
  ) { }

  async ngOnInit() {
    await this.getBanksLists();
  }

  async getBanksLists() {
    await this.globalSer.presentLoading();
    const data: any = await this.ofrendaService.getBanksList();

    if (data && !data.error) {
      this.banks = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

}
