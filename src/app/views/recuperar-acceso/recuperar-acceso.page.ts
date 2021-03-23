import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import {RecuperarService} from './recuperar.service';
import {GlobalService} from '../../services/global.service';
import {documentType} from '../../../Utils/profile.data';
import {
  checkDate,
  checkEmail,
  checkPassword,
  onlyNumbersInputValidation
} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-recuperar-acceso',
  templateUrl: './recuperar-acceso.page.html',
  styleUrls: ['./recuperar-acceso.page.scss'],
})
export class RecuperarAccesoPage implements OnInit {

  successRecovery = false;
  documentTypes = documentType;
  formData: any = {
    document: null,
    check: {
      email: null,
      birthday: null,
    },
    password: null,
    repPassword: null
  };
  formData2: any = {
    documentType: null,
    document: null,
  };
  view = 0;
  views: any[] = [
    { msg: 'Por favor, indique su número de documento.' },
    { msg: null, check: null },
    { msg: null, setNewPassword: false },
  ];
  maxDate: any = null;


  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private recuperarService: RecuperarService,
  ) {
    this.maxDate = dayjs().format('YYYY-MM-DD');
  }

  ngOnInit() {
  }

  async back() {
    await this.navCtrl.back();
  }

  async checkDocument() {
    await this.globalSer.presentLoading('Verificando número de documento, por favor espere ...');

    this.formData.document = `${this.formData2.documentType}${this.formData2.document}`;

    const res = await this.recuperarService.checkDocument(this.formData);

    if (res && !res.error) {
      this.views[1].msg = res.msg;
      this.views[1].check = res.check;
      this.view = 1;
      await this.globalSer.dismissLoading();
    }
    else await this.globalSer.dismissLoading();
  }

  async checkParams() {
    await this.globalSer.presentLoading('Verificando respuestas, por favor espere ...');

    const res = await this.recuperarService.checkParams(this.formData);

    if (res && !res.error) {
      this.views[2] = {...res};
      this.view = 2;
      await this.globalSer.dismissLoading();
    }
    else await this.globalSer.dismissLoading();
  }

  async changePassword() {
    await this.globalSer.presentLoading('Verificando número de documento, por favor espere ...');

    this.formData.document = `${this.formData2.documentType}${this.formData2.document}`;

    const res = await this.recuperarService.changePassword(this.formData);

    if (res && !res.error) {
      this.views[3] = {...res};
      this.view = 3;
      this.successRecovery = true;
      await this.globalSer.dismissLoading();
    }
    else await this.globalSer.dismissLoading();
  }

  /*
  Getters and setters
   */
  setView(view) {
    const currentView = this.view;
    this.view = view;
    if (currentView === 1) {
      this.views[1].msg = null;
      this.formData.check.birthday = null;
      this.formData.check.email = null;
    }
    else if (currentView === 2) {
      this.formData.check.birthday = null;
      this.formData.check.email = null;
      this.views[2].msg = null;
      this.formData.password = null;
      this.formData.repPassword = null;
    }
  }

  setDate() {
    if (this.formData.check.birthday) {
      this.formData.check.birthday = dayjs(this.formData.check.birthday).format('YYYY-MM-DD');
    }
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
        this.formData2.documentType = selectedValue;
      }
    });
  }

  validateOnlyNumbers(event: any) {
    onlyNumbersInputValidation(event);
  }

  /*
  Confirms
   */

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea cancelar la recuperación de su cuenta?',
      confirmAction: () => this.back()
    });
  }

  validateData(view: number|null = null): string|null {
    if (view === 0) {
      if (!/^([CC|CE|PE|TI|PAS]){2,3}/.test(this.formData2.documentType)) return 'Disculpe, pero debe indicar el tipo de documento.';
      if (!/[0-9]{5,10}/.test(this.formData2.document)) return 'Disculpe, pero debe indicar el número de documento de identidad.';
      return null;
    }

    if (view === 1) {
      if (this.views[1].check.email && !checkEmail(`${this.formData.check.email}`))
        return 'Disculpe, pero debe indicar un correo electrónico válido.';
      if (this.views[1].check.birthday && !checkDate(`${this.formData.check.birthday}`))
        return 'Disculpe, pero debe indicar una fecha válida.';
      return null;
    }

    if (!checkPassword(this.formData.password))
      return 'Disculpe, pero debe indicar una contraseña correcta.' +
        '<br><br>Solo se permiten letras (A-Z, a-z), números (0-9) y caracteres especiales (¿?¡!=)(/&%$#,.-+*).';
    if (this.formData.password !== this.formData.repPassword)
      return 'Disculpe, pero las contraseñas ingresadas no coinciden.';
    return null;
  }

  async checkStep(step: number) {
    const validated = this.validateData(step);

    if (!validated) {
      if (step === 0) await this.checkDocument();
      else if (step === 1) await this.checkParams();
      else if (step === 2) await this.confirmChangePassword();
      else await this.globalSer.presentAlert('Alerta', 'Error al validar');
    }
    else await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
  }

  async confirmChangePassword() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea asignar esta nueva contraseña?',
      confirmAction: () => this.changePassword()
    });
  }

}
