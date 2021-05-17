import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {EventosService} from '../eventos.service';
import {GlobalService} from '../../../services/global.service';
import {Router} from '@angular/router';
import {checkDate, checkHour, checkTitlesOrDescriptions, replaceNbsp} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  formData: any = {
    title: null,
    description: null,
    date: null,
    initHour: null,
    endHour: null,
    toRoles: [],
    rolesSelected: '',
  };
  roles = [
    'Administradores',
    'Pastores',
    'Supervisores',
    'Líderes',
    'Personas',
  ];
  minDate: string = dayjs().add(1, 'd').format('YYYY-MM-DD');
  maxDate: string = dayjs().add(5, 'y').format('YYYY-MM-DD');
  minInitHour: string = dayjs().add(1, 'd').startOf('d').format('HH:[00]');
  minEndHour: string = dayjs().startOf('d').add(1, 'd').format('HH:[00]');

  constructor(
    private alertCtrl: AlertController,
    private eventsService: EventosService,
    private globalSer: GlobalService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession())
      this.router.navigate(['/ingresar']);
  }

  ngOnInit() {
  }

  async back() {
    await this.navCtrl.back();
  }

  async addEvent(dataToSend: any) {
    await this.globalSer.presentLoading('Agregando evento, por favor espere ...');
    const data: any = await this.eventsService.saveEvents(dataToSend);

    if (data && !data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha agregado el evento exitosamente.');
      await this.navCtrl.back();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  // getters and setters

  validateForm(validate: any): string|null {
    if (!checkTitlesOrDescriptions(validate.title)) return 'Disculpe, pero debe indicar el título correcto para el evento.';
    if (validate.description && validate.description.length < 5)
      return 'Disculpe, pero debe indicar una descripción para el evento válida.';
    if (!checkDate(validate.date)) return 'Disculpe, pero debe indicar la fecha del evento.';
    if (!checkHour(validate.initHour)) return 'Disculpe, pero debe indicar la hora de inicio del evento.';
    if (!checkHour(validate.endHour))
      return 'Disculpe, pero debe indicar una hora correcta para la finalización del evento.';
    if (!validate.toRoles || validate.toRoles.length === 0)
      return 'Disculpe, pero debe seleccionar los roles a los que va dirigido el evento.';

    return null;
  }

  getHours(hours) {
    if (hours.length === 5) return hours;
    if (hours === 'Invalid Date') return null;
    return hours ? dayjs(hours).format('HH:mm') : null;
  }

  setMinEndHour(input: string) {
    if (input === 'date') {
      this.minInitHour = dayjs(`${this.formData[input]}`).startOf('d').format('HH:[00]');

      if (!this.formData.initHour) {
        this.formData.initHour = dayjs(`${this.formData[input]}`).startOf('d').format('YYYY-MM-DDTHH:[00]:ssZ');
      }
      if (!this.formData.endHour) {
        this.minEndHour = dayjs(`${this.formData.initHour}`).startOf('d').add(1, 'h').format('HH:[00]');
        this.formData.endHour = dayjs(`${this.formData.initHour}`)
          .add(1, 'h')
          .format('YYYY-MM-DDTHH:[00]:ssZ');
      }
      else {
        this.minEndHour = dayjs(`${this.formData.initHour}`).add(1, 'h').format('HH:[00]');
      }
    }
    else if (input === 'initHour') {
      if (dayjs(`${this.formData[input]}`).isAfter(dayjs(`${this.formData.endHour}`))) {
        this.minEndHour = dayjs(`${this.formData[input]}`)
          .add(1, 'h')
          .format('HH:[00]');
        this.formData.endHour = dayjs(`${this.formData.initHour}`)
          .add(1, 'h')
          .format('YYYY-MM-DDTHH:[00]:ssZ');
      }
      else {
        this.minEndHour = dayjs(`${this.formData[input]}`)
          .add(1, 'h')
          .format('HH:[00]');
      }
    }
  }

  setDateFormToSend() {
    return {
      title: this.formData.title ? this.formData.title.toUpperCase() : null,
      description: this.formData.description ? replaceNbsp(this.formData.description.toUpperCase()) : null,
      date: this.formData.date ? dayjs(this.formData.date).format('YYYY-MM-DD') : null,
      initHour: this.getHours(this.formData.initHour),
      endHour: this.getHours(this.formData.endHour),
      toRoles: this.formData.toRoles || [],
    };
  }

  getRoles(rolesList: number[]): string {
    let ret = '';
    if (rolesList.length > 0) {
      for (const v of rolesList) {
        if (ret === '') ret = this.roles[v];
        else ret += `, ${this.roles[v]}`;
      }
    }

    return ret;
  }

  // actions alerts
  async showAlertRolesList(selected: number[]) {
    const inputs: any[] = [];

    for (const [i, value] of this.roles.entries()) {
      inputs.push({
        name: `roles`,
        type: 'checkbox',
        label: value,
        value: i,
        checked: selected.indexOf(i) > -1,
      });
    }
    await this.globalSer.alertWithList({
      header: 'Seleccione',
      inputs,
      confirmAction: (selectedValue) => {
        this.formData.toRoles = selectedValue;
        this.formData.rolesSelected = this.getRoles(selectedValue);
      }
    });
  }

  async confirmAction() {
    const dataToSend: any = this.setDateFormToSend();
    const validate = this.validateForm(dataToSend);
    if (!validate) {
      await this.globalSer.alertConfirm({
        header: '¡Confirme!',
        message: '¿Está seguro qué desea agregar este evento?',
        confirmAction: async () => await this.addEvent(dataToSend)
      });
    }
    else
      await this.globalSer.presentAlert('¡Error!', validate || 'Disculpe, pero debe completar el formulario.');
  }

}
