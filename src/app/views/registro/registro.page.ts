import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {RegistroService} from './registro.service';
import {GlobalService} from '../../services/global.service';
import {documentType} from '../../../Utils/profile.data';
import {
  checkNameOrLastName, checkPassword, checkPhone,
  onlyLettersInputValidation,
  onlyNumbersInputValidation
} from '../../../Utils/validations.functions';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  documentTypes = documentType;
  referred = false;
  church: any = null;
  churches: any[] = [];
  successRegister = false;
  view = 0;
  formData: any = {
    phone: null,
    password: null,
    repPassword: null,
    names: null,
    lastNames: null,
    referred: null,
    church: null,
  };

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private registroService: RegistroService,
    private storageService: StorageService,
  ) { }

  async ngOnInit() {
    await this.getChurches();
  }

  async getChurches() {
    await this.globalSer.presentLoading('Registrando, por favor espere ...');
    this.churches = await this.registroService.getChurches();
    await this.storageService.set('churches', this.churches);
    await this.globalSer.dismissLoading();
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

  async showListChurches() {
    const inputs: any = [];
    for (const [index, value] of this.churches.entries()) {
      inputs.push({
        name: `documentType`,
        type: 'radio',
        label: value.name,
        value: index,
        checked: this.church?._id === value._id,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValue) => {
        this.formData.church = this.churches[selectedValue]?._id || null;
        this.church = this.churches[selectedValue] || null;
      }
    });
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
