import { Component, OnInit} from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import {EditarService} from './editar.service';
import {IEditar} from './editar.model';
import {PerfilService} from '../perfil.service';
import {CookiesService} from '../../../services/cookies.service';
import {GlobalService} from '../../../services/global.service';
import {
  checkDate,
  checkEmail,
  checkIfValueIsNumber,
  checkNameOrLastName,
  checkPhone,
  checkTitlesOrDescriptions, onlyLettersInputValidation, onlyNumbersInputValidation
} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  professions = [];
  companyType = [];
  educationLevel = [];
  bloodType = [];
  departments = [];
  cities = [];
  civilStatus = [];
  gender = [];
  yesOrNotValues = ['No', 'Si'];
  maxDate: any = null;
  formData: IEditar | null = null;

  constructor(
    private alertCtrl: AlertController,
    private editarService: EditarService,
    private cookieService: CookiesService,
    private perfilService: PerfilService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
  ) {
    this.educationLevel = editarService.educationLevel;
    this.professions = editarService.professionsList;
    this.bloodType = editarService.bloodTypeList;
    this.companyType = editarService.companyTypeList;
    this.civilStatus = editarService.civilStatusList;
    this.gender = editarService.genderList;
    this.departments = editarService.departmentsList.map(d => d.department);
    this.maxDate = dayjs().format('YYYY-MM-DD');
  }

  async ngOnInit() {
    await this.globalSer.presentLoading();
    const token = this.cookieService.getCookie('token');
    if (token) {
      const userData: IEditar | any = this.cookieService.getCookie('data');
      if (userData) {
        this.formData = {...userData} as IEditar;
        this.formData.company = this.formData.company ? 'Si' : 'No';
        this.formData.baptized = this.formData.baptized ? 'Si' : 'No';
        if (this.formData.department !== null) this.getCity();
        await this.globalSer.dismissLoading();
      }
      else await this.errorSession();
    }
    else await this.errorSession();
  }

  async back() {
    await this.navCtrl.back();
  }

  getCity(clearCity = false) {
    const filter = this.editarService.departmentsList[this.formData.department] || null;
    if (filter) this.cities = filter.cities || [];
    if (clearCity) this.formData.city = null;
  }

  setDate() {
    if (this.formData.birthday) {
      this.formData.birthday = dayjs(this.formData.birthday).format('YYYY-MM-DD');
    }
  }

  async errorSession() {
    await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
    this.globalSer.clearAllData();
    await this.globalSer.dismissLoading();
    await this.navCtrl.navigateBack(['/']);
  }

  /*
    Alerts
   */

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

    const updateData = (selectedValue: any) => {
      this.formData[input] = selectedValue;
      if (input === 'department') this.getCity(true);
    };

    await this.globalSer.alertWithList({
      inputs,
      confirmAction: updateData
    });
  }

  async showAlertYesOrNotList(input: string, selected: any = null) {
    const inputs: any = [];
    for (const [i, value] of this.yesOrNotValues.entries()) {
      inputs.push({
        name: `value-${i}`,
        type: 'radio',
        label: value,
        value,
        checked: value === selected,
      });
    }

    const updateData = (selectedValue: any) => { this.formData[input] = selectedValue; };

    await this.globalSer.alertWithList({
      inputs,
      confirmAction: updateData
    });
  }

  /*
    validations
   */

  validateOnlyNumbers(event: any) {
    onlyNumbersInputValidation(event);
  }

  validateOnlyLetters(event: any) {
    onlyLettersInputValidation(event);
  }

  validateData(): string|null {
    const { formData } = this;
    if (!checkEmail(formData.email)) return 'Disculpe, pero debe indicar su correo electrónico.';
    if (!checkNameOrLastName(formData.names)) return 'Disculpe, pero debe indicar su nombre.';
    if (!checkNameOrLastName(formData.lastNames)) return 'Disculpe, pero debe indicar su apellido.';
    if (!checkPhone(formData.phone)) return 'Disculpe, pero debe indicar su número de teléfono.';
    if (!checkDate(formData.birthday)) return 'Disculpe, pero debe indicar su fecha de nacimiento.';
    if (!checkIfValueIsNumber(`${formData.gender}`)) return 'Disculpe, pero debe indicar su sexo.';
    if (!checkIfValueIsNumber(`${formData.bloodType}`)) return 'Disculpe, pero debe indicar su tipo de sangre.';
    if (!checkIfValueIsNumber(`${formData.civilStatus}`)) return 'Disculpe, pero debe indicar su estado civil.';
    if (!checkIfValueIsNumber(`${formData.educationLevel}`)) return 'Disculpe, pero debe indicar su nivel educativo.';
    if (!checkIfValueIsNumber(`${formData.profession}`)) return 'Disculpe, pero debe indicar su profesión.';
    if (formData.company === null || formData.company === undefined) return 'Disculpe, pero debe indicar si posee una empresa.';
    if (formData.company !== null && formData.company === 'Si')
      if (!checkIfValueIsNumber(`${formData.companyType}`)) return 'Disculpe, pero debe indicar el tipo de empresa que posee.';
    if (formData.baptized === null || formData.baptized === undefined)
      return 'Disculpe, pero debe indicar si usted se encuentra bautizado.';
    if (!checkIfValueIsNumber(`${formData.department}`)) return 'Disculpe, pero debe indicar el departamento de residencia.';
    if (!checkIfValueIsNumber(`${formData.city}`)) return 'Disculpe, pero debe indicar la ciudad de residencia.';
    if (!checkTitlesOrDescriptions(formData.locality)) return 'Disculpe, pero debe indicar el nombre de la localidad de residencia.';
    if (!checkTitlesOrDescriptions(formData.direction)) return 'Disculpe, pero debe indicar su dirección de residencia.';

    return null;
  }

  async updateData() {
    const validated = this.validateData();

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.presentLoading('Actualizando perfil, por favor espere ...');
      const data: any = Object.assign({}, this.formData);
      data.company = data.company === 'Si';
      data.baptized = data.baptized === 'Si';
      const updated = await this.editarService.updateProfile(data);

      if (updated && !updated.error) {
        const userData = this.cookieService.getCookie('data');
        if (userData) this.cookieService.setCookie('data', {...userData, ...updated});
        await this.globalSer.dismissLoading();
        await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado su perfil exitosamente.');
      }
      else if (updated && updated.error) {
        await this.globalSer.dismissLoading();
        await this.globalSer.errorSession();
      }
      else await this.globalSer.dismissLoading();
    }
  }

  /*
    Update
   */

  async confirmUpdate() {
    const validated = this.validateData();

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.alertConfirm({
        header: 'Actualizar perfil',
        message: '¿Está seguro qué desea actualizar los datos de su perfil?',
        confirmAction: () => this.updateData()
      });
    }
  }

}
