import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {
  checkNameOrLastName,
  checkPhone,
  onlyLettersInputValidation,
  onlyNumbersInputValidation
} from '../../../../Utils/validations.functions';
import {PadresService} from '../padres.service';
import {GlobalService} from '../../../services/global.service';
import {documentType} from '../../../../Utils/profile.data';

@Component({
  selector: 'app-nuevo-miembro',
  templateUrl: './nuevo-miembro.page.html',
  styleUrls: ['./nuevo-miembro.page.scss'],
})
export class NuevoMiembroPage implements OnInit {
  documentTypes = documentType;
  successRegister = false;
  successData: string|null = null;
  formData: any = {
    documentType: null,
    document: null,
    phone: null,
    names: null,
    lastNames: null,
  };

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private padreService: PadresService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  async registerMember() {
    await this.globalSer.presentLoading('Registrando, por favor espere ...');

    const data: any = {...this.formData};
    data.document = `${data.documentType}${data.document}`;

    const res = await this.padreService.saveMember(data);

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

  validateOnlyNumbers(event: any) {
    onlyNumbersInputValidation(event);
  }

  validateOnlyLetters(event: any) {
    onlyLettersInputValidation(event);
  }

  // getters and setters
  getDocumentLabel(value: any) {
    if (!value) return null;
    const da = this.documentTypes.find(d => d.val === value);
    return da ? da.label : null;
  }

  async showAlertDocumentList(selected: any = null) {
    const inputs: any = [];
    for (const value of this.documentTypes) {
      inputs.push({
        name: `documentType`,
        type: 'radio',
        label: value.label,
        value: value.val,
        checked: selected !== null && selected === value.val,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValue) => {
        this.formData.documentType = selectedValue;
      }
    });
  }

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea cancelar el registro del nuevo miembro?',
      confirmAction: () => this.back()
    });
  }

  validateData(): string|null {
    if (!/^([CC|CE|PE|TI|PAS]){2,3}/.test(this.formData.documentType)) return 'Disculpe, pero debe indicar el tipo de documento.';
    if (!/[0-9]{5,9}/.test(this.formData.document)) return 'Disculpe, pero debe indicar el número de documento de identidad.';
    if (!checkNameOrLastName(this.formData.names)) return 'Disculpe, pero debe indicar un nombre válido.';
    if (!checkNameOrLastName(this.formData.lastNames)) return 'Disculpe, pero debe indicar un apellido válido.';
    if (!checkPhone(this.formData.phone)) return 'Disculpe, pero debe indicar un número de teléfono válido.';
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
    else {
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
  }

}
