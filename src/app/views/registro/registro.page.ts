import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {RegistroService} from './registro.service';
import {GlobalService} from '../../services/global.service';
import {documentType} from '../../../Utils/profile.data';
import {
  checkDocument,
  checkEmail,
  checkNameOrLastName, checkPassword, checkPhone,
  onlyLettersInputValidation,
  onlyNumbersInputValidation
} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  documentTypes = documentType;
  referred = false;
  successRegister = false;
  view = 0;
  formData: any = {
    phone: null,
    password: null,
    repPassword: null,
    names: null,
    lastNames: null,
    referred: null,
  };

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private registroService: RegistroService,
  ) { }

  ngOnInit() {
  }

  async back() {
    await this.navCtrl.back();
  }

  async registerMember() {
    await this.globalSer.presentLoading('Registrando, por favor espere ...');
    const data: any = {...this.formData};
    const res = await this.registroService.register(data);

    if (res && !res.error) {
      this.successRegister = true;
      await this.globalSer.dismissLoading();
    }
    else await this.globalSer.dismissLoading();
  }

  // getters and setters
  async setView(view) {
    if (view === 1) {
      const validated = this.validateData(view);
      if (!validated) this.view = view;
      else await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
    else this.view = view;
  }

  showInputReferred() {
    this.referred = !this.referred;
  }

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

  validateOnlyNumbers(event: any) {
    onlyNumbersInputValidation(event);
  }

  validateOnlyLetters(event: any) {
    onlyLettersInputValidation(event);
  }

  /*
  Confirms
   */

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea cancelar el registro?',
      confirmAction: () => this.back()
    });
  }

  validateData(view: number|null = null): string|null {
    if (view === 1) {
      if (!checkNameOrLastName(this.formData.names)) return 'Disculpe, pero debe indicar un nombre válido.';
      if (!checkNameOrLastName(this.formData.lastNames)) return 'Disculpe, pero debe indicar un apellido válido.';
      return null;
    }

    if (!checkPhone(this.formData.phone)) return 'Disculpe, pero debe indicar un número de teléfono válido. Ejm: 3161234567';
    if (!checkPassword(this.formData.password))
      return 'Disculpe, pero debe indicar una contraseña correcta.' +
        '<br><br>Solo se permiten letras (A-Z, a-z), números (0-9) y caracteres especiales (¿?¡!=)(/&%$#,.-+*)';
    if (this.formData.password !== this.formData.repPassword)
      return 'Disculpe, pero las contraseñas ingresadas no coinciden.';

    return null;
  }

  async confirmRegister() {
    const validated = this.validateData();

    if (!validated) {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea registrarse con esta información?',
        confirmAction: () => this.registerMember()
      });
    }
    else {
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
  }

}
