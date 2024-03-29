import { Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import {IEditar} from './editar.model';
import {EditarService} from './editar.service';
import {GlobalService} from '../../../services/global.service';
import {StorageService} from '../../../services/storage.service';
import {
  checkDate,
  checkEmail,
  checkIfValueIsNumber,
  checkNameOrLastName,
  checkPhone,
  onlyLettersInputValidation, onlyNumbersInputValidation
} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  documentTypes = [];
  professions = [];
  companyType = [];
  educationLevel = [];
  bloodType = [];
  departments = [];
  cities = [];
  civilStatus = [];
  gender = [];
  churches = [];
  churchesSelected: any = null;
  yesOrNotValues = ['No', 'Si'];
  maxDate: any = null;
  formData: IEditar | null = null;

  constructor(
    private editarService: EditarService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private storageService: StorageService,
  ) {
    this.documentTypes = editarService.documentTypesList;
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
    const token = await this.storageService.get('token');
    if (token) {
      const userData: IEditar | any = await this.storageService.get('data');
      this.churches = await this.storageService.get('churches');
      if (userData) {
        this.formData = {...userData} as IEditar;
        this.formData.documentType = this.formData.document?.replace(/[0-9]{5,12}/, '') || null;
        this.formData.document = this.formData.document?.replace(/[A-Za-z]{1,3}/, '') || null;
        this.formData.company = this.formData.company ? 'Si' : 'No';
        this.formData.baptized = this.formData.baptized ? 'Si' : 'No';
        this.formData.meetingNew = this.formData.meetingNew ? 'Si' : 'No';
        const index = this.churches.findIndex(c => c._id === this.formData.church);
        this.churchesSelected = index === -1 ? null : index;
        if (this.formData.department !== null) this.getCity();
      }
      else await this.errorSession();
    }
    else await this.errorSession();

    await this.globalSer.dismissLoading();
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
    await this.globalSer.clearAllData();
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

  async showAlertChurchesList() {
    const inputs: any = [];
    for (const [index, value] of this.churches.entries()) {
      inputs.push({
        name: `value-${value._id}`,
        type: 'radio',
        label: value.name,
        value: index,
        checked: this.formData.church === value._id,
      });
    }

    const updateData = (selectedValue: any) => {
      this.churchesSelected = selectedValue;
      this.formData.church = this.churches[selectedValue]._id;
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

  getDocumentLabel(value: any) {
    if (!value) return null;
    const da = this.documentTypes.find(d => d.val === value);
    return da?.label || null;
  }

  validateOnlyNumbers(event: any) {
    onlyNumbersInputValidation(event);
  }

  validateOnlyLetters(event: any) {
    onlyLettersInputValidation(event);
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

  validateData(): string|null {
    const { formData } = this;
    if (formData.documentType || formData.document) {
      if (!['CC', 'TI', 'PAS', 'CE', 'PE'].includes(`${formData.documentType}`))
        return 'Disculpe, pero debe seleccionar un tipo de documento.';
      if (!/[0-9]{5,11}/.test(`${formData.document}`))
        return 'Disculpe, pero debe indicar su número de documento.';
    }
    if (!checkPhone(formData.phone)) return 'Disculpe, pero debe indicar su número de teléfono.';
    if (!checkNameOrLastName(formData.names)) return 'Disculpe, pero debe indicar su nombre.';
    if (!checkNameOrLastName(formData.lastNames)) return 'Disculpe, pero debe indicar su apellido.';
    if (formData.email) if (!checkEmail(formData.email)) return 'Disculpe, pero debe un correo electrónico válido.';
    if (formData.birthday) if (!checkDate(formData.birthday)) return 'Disculpe, pero debe indicar su fecha de nacimiento.';
    if (formData.company === null || formData.company === undefined) return 'Disculpe, pero debe indicar si posee una empresa.';
    if (formData.company !== null && formData.company === 'Si')
      if (!checkIfValueIsNumber(`${formData.companyType}`)) return 'Disculpe, pero debe indicar el tipo de empresa que posee.';

    return null;
  }

  async updateData() {
    const validated = this.validateData();

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.presentLoading('Actualizando perfil, por favor espere ...');
      const data: any = Object.assign({}, this.formData);
      if (data.documentType && data.document)
        data.document = `${data.documentType?.toUpperCase()}${data.document}`;
      else data.document = null;
      data.company = data.company === 'Si';
      data.baptized = data.baptized === 'Si';
      data.meetingNew = data.meetingNew === 'Si';
      data.position = data.position ? data.position.trim().toUpperCase() : null;
      const updated = await this.editarService.updateProfile(data);

      if (updated && !updated.error) {
        const userData = await this.storageService.get('data');
        if (userData) await this.storageService.set('data', {...userData, ...updated});
        await this.globalSer.dismissLoading();
        await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado su perfil exitosamente.');
        await this.back();
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
