import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalService} from '../modal.service';
import {GlobalService} from '../../../services/global.service';
import {onlyNumbersInputValidation2} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-modal-grupos-familiares',
  templateUrl: './modal-grupos-familiares.page.html',
  styleUrls: ['./modal-grupos-familiares.page.scss'],
})
export class ModalGruposFamiliaresPage implements OnInit {

  @Input() memberSelected: string|null = null;
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
    private modalController: ModalController,
    private modalService: ModalService,
  ) { }

  ngOnInit() {
  }

  async searchGroups() {
    if (this.init) this.init = false;
    this.searching = true;
    const data = await this.modalService.getFamiliesGroups(this.queryParams);

    if (data && !data.error) this.groups = data || [];
    else if (data && data.error) {
      await this.globalSer.errorSession();
      this.groups = [];
    }
    else this.groups = [];

    this.searching = false;
  }

  async closeModal(group = null) {
    await this.modalController.dismiss(group);
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

    if (group) await this.closeModal(group);
    else
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero ha ocurrido un error al momento de seleccionar al grupo.');
  }

  resetQueryParams() {
    this.queryParams.sector = null;
    this.queryParams.subSector = null;
    this.queryParams.number = null;
  }

  validateOnlyNumber2(event: any) {
    onlyNumbersInputValidation2(event);
  }

}
