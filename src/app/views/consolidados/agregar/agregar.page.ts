import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import {GlobalService} from '../../../services/global.service';
import {PadresService} from '../../padres/padres.service';
import {
  checkEmail,
  checkNameOrLastName,
  checkPhone,
  onlyLettersInputValidation,
  onlyNumbersInputValidation
} from '../../../../Utils/validations.functions';
import {ModalMiembrosPage} from '../../modals/modal-miembros/modal-miembros.page';
import {ModalGruposFamiliaresPage} from '../../modals/modal-grupos-familiares/modal-grupos-familiares.page';
import {ConsolidadosService} from '../consolidados.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  successRegister = false;
  successData: string|null = null;
  gender = [];
  civilStatus = [];
  memberSelected: any = null;
  groupSelected: any = null;
  maxDate: any = null;
  otherConsolidator = false;
  formData: any = {
    phone: null,
    password: null,
    names: null,
    lastNames: null,
    email: null,
    birthday: null,
    civilStatus: null,
    locality: null,
    direction: null,
    petition: null,
    attendGroup: false,
    groupId: null,
    consolidated: true,
    referred: null,
  };

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private consolidadosService: ConsolidadosService,
  ) {
    this.civilStatus = consolidadosService.civilStatusList;
    this.gender = consolidadosService.genderList;
    this.maxDate = dayjs().format('YYYY-MM-DD');
  }

  ngOnInit() {
  }

  async registerMember() {
    await this.globalSer.presentLoading('Registrando, por favor espere ...');
    const res: any = await this.consolidadosService.saveMember({...this.formData});

    if (res && !res.error) {
      this.successData = res;
      this.successRegister = true;
      await this.globalSer.dismissLoading();
    }
    else if (res && res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async back() {
    await this.navCtrl.back();
  }

  setDate() {
    if (this.formData.birthday) {
      this.formData.birthday = dayjs(this.formData.birthday).format('YYYY-MM-DD');
    }
  }

  validateOnlyNumbers(event: any) {
    onlyNumbersInputValidation(event);
  }

  validateOnlyLetters(event: any) {
    onlyLettersInputValidation(event);
  }

  // getters and setters
  getMemberSelectedNames() {
    return this.memberSelected ?
      `${this.memberSelected.names} ${this.memberSelected.lastNames}`
      : null;
  }

  getGroupSelectedInfo() {
    return this.groupSelected ?
      `S: ${this.groupSelected.sector} / SS ${this.groupSelected.subSector} / # ${this.groupSelected.number}`
      : null;
  }

  setOtherConsolidator() {
    this.otherConsolidator = !this.otherConsolidator;
  }

  setCheckedValue(input) {
    this.formData[input] = !this.formData[input];
    if (input === 'attendGroup' && !this.formData.attendGroup) {
      this.formData.groupsId = [];
      this.groupSelected = null;
    }
    if (input === 'iAmConsolidator' && this.formData.iAmConsolidator) {
      this.memberSelected = null;
      this.formData.referred = null;
    }
    if (input === 'consolidated' && !this.formData.consolidated) {
      this.memberSelected = null;
      this.formData.petition = null;
      this.formData.referred = null;
      this.formData.iAmConsolidator = true;
    }
  }

  async showAlertList(input: string, nameArray: string, selected: any = null) {
    const inputs: any = [];
    for (const [i, value] of this[nameArray].entries()) {
      inputs.push({
        name: `value-${i}`,
        type: 'radio',
        label: value,
        value: i,
        checked: selected !== null && selected.toString() === i.toString(),
      });
    }

    const confirmAction = (selectedValue: any) => {
      this.formData[input] = selectedValue;
    };

    await this.globalSer.alertWithList({
      inputs,
      confirmAction
    });
  }


  /*
  Modals
   */
  async openMembersModal() {
    await this.globalSer.presentLoading();
    const updateOnDismiss = async (member) => {
      if (member) {
        this.memberSelected = member;
        this.formData.referred = member._id;
      }
    };
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      ModalMiembrosPage,
      {},
      false,
      updateOnDismiss
    );
  }

  async openGroupsModal() {
    await this.globalSer.presentLoading();
    const updateOnDismiss = async (group) => {
      if (group) {
        this.groupSelected = group;
        this.formData.groupId = group._id;
      }
    };
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      ModalGruposFamiliaresPage,
      {},
      false,
      updateOnDismiss
    );
  }

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea cancelar el registro?',
      confirmAction: () => this.back()
    });
  }

  validateData(): string|null {
    if (!checkPhone(this.formData.phone)) return 'Disculpe, pero debe indicar un número de teléfono válido. Ejm: 3161234567';
    if (!checkNameOrLastName(this.formData.names)) return 'Disculpe, pero debe indicar un nombre válido.';
    if (!checkNameOrLastName(this.formData.lastNames)) return 'Disculpe, pero debe indicar un apellido válido.';
    if (this.formData.email && !checkEmail(this.formData.email))
      return 'Disculpe, pero debe indicar un correo electrónico válido.';
    if (this.formData.attendGroup && !this.formData.groupId)
      return 'Disculpe, pero debe seleccionar al grupo al que asiste el nuevo miembro.';
    if (this.otherConsolidator && !this.formData.referred)
      return 'Disculpe, pero debe seleccionar al miembro consolidador.';

    return null;
  }

  async confirmRegister() {
    const validated = this.validateData();

    if (!validated) {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea registar a este nuevo miembro?',
        confirmAction: () => this.registerMember()
      });
    }
    else await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
  }

}