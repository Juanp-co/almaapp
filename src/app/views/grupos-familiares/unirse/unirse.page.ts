import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../../services/storage.service';
import {UnirseService} from '../unirse.service';
import {GlobalService} from '../../../services/global.service';
import {NavController} from '@ionic/angular';
import {onlyNumbersInputValidation2} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-unirse',
  templateUrl: './unirse.page.html',
  styleUrls: ['./unirse.page.scss'],
})
export class UnirsePage implements OnInit {

  userData: any;
  list: any[] = [
    { key: 'sector', label: 'sector' },
    { key: 'subSector', label: 'sub-sector' },
    { key: 'number', label: 'número' },
  ];
  findFor: any = { key: 'sector', label: 'sector' };
  queryParams: any = {
    limit: 50,
    page: 1,
    input: 'number',
    value: 1,
    sector: null,
    subSector: null,
    number: null,
  };
  groups: any[] = [];
  searching = false;
  init = true;

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private storageService: StorageService,
    private unirseService: UnirseService,
  ) { }

  async ngOnInit() {
  }

  async ionViewWillEnter() {
    const token = await this.storageService.get('token');
    if (!token) {
      await this.navCtrl.back();
    }
    else {
      const data = await this.storageService.get('data');

      if (data) {
        this.userData = data;
        this.queryParams.ignoreIds = data.familyGroupId?.toString() || undefined;
      }
      else await this.getDataLogin();
    }
  }

  async getDataLogin() {
    const res: any = await this.unirseService.getSessionData();

    if (res) {
      await this.storageService.set('data', res);
      this.queryParams.ignoreIds = res.familyGroupId?.toString() || undefined;
    }
    else if (res && res.error) {
      await this.globalSer.errorSession();
      await this.navCtrl.back();
    }
  }

  async searchGroups() {
    if (this.init) this.init = false;
    this.searching = true;
    const data = await this.unirseService.getFamiliesGroups(this.queryParams);

    if (data && !data.error) this.groups = data || [];
    else if (data && data.error) {
      await this.globalSer.errorSession();
      this.groups = [];
    }
    else this.groups = [];

    this.searching = false;
  }

  async saveGroupSelected(formData: any = {}) {
    await this.globalSer.presentLoading('Guardando, por favor espere...');
    const data = await this.unirseService.saveGroupSelected(formData);

    if (data && !data.error) {
      if (this.userData) {
        this.userData.familyGroupId.push(formData.familyGroupId);
        await this.storageService.set('data', this.userData);
      }
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha unido al grupo exitosamente.');
      await this.navCtrl.back();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async cleanFilter() {
    this.queryParams.input = 'sector';
    this.findFor = this.list[0];
    this.queryParams.sector = null;
    this.queryParams.subSector = null;
    this.queryParams.number = null;
    this.init = true;
    this.groups = [];
  }

  async setFindFor() {
    const inputs: any[] = [];

    for (const value of this.list) {
      inputs.push({
        name: `find-for`,
        type: 'radio',
        label: value.label.toUpperCase(),
        value: value.key,
        checked: this.findFor.key === value.key,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValue) => {
        const index = this.list.findIndex(l => l.key === selectedValue);
        this.queryParams.input = selectedValue;
        this.findFor = this.list[index];
        this.queryParams.sector = null;
        this.queryParams.subSector = null;
        this.queryParams.number = null;
      }
    });
  }

  async selectGroup(index) {
    const group = this.groups[index] || null;

    if (group) {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea unirse a este grupo?',
        confirmAction: () => this.saveGroupSelected({ familyGroupId: group._id })
      });
    }
  }

  validateOnlyNumber2(event: any) {
    onlyNumbersInputValidation2(event);
  }

}
