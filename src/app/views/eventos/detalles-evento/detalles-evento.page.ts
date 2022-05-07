import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/es';
import relativeTime from 'dayjs/plugin/relativeTime';
import {EventosService} from '../eventos.service';
import {GlobalService} from '../../../services/global.service';
import {StorageService} from '../../../services/storage.service';

@Component({
  selector: 'app-detalles-evento',
  templateUrl: './detalles-evento.page.html',
  styleUrls: ['./detalles-evento.page.scss'],
})
export class DetallesEventoPage implements OnInit {

  eventData: any = null;
  eventDataForm: any = {
    _id: null,
    title: null,
    description: null,
    date: null,
    dateEnd: null,
    initHour: null,
    endHour: null,
    picture: null,
    toRoles: [],
    rolesSelected: '',
  };
  id: any = null;
  showButtonEdit = false;
  showEditForm = false;
  userid: any = null;
  roles = [
    'Administradores',
    'Pastores',
    'Supervisores',
    'Líderes',
    'Personas',
  ];

  constructor(
    private activateRoute: ActivatedRoute,
    private eventsService: EventosService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private storageService: StorageService,
  ) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.id = this.activateRoute.snapshot.paramMap.get('_id');
    const userData: any = await this.storageService.get('data');

    if (userData) this.userid = userData._id;

    if (this.id) await this.getDataEvent();
    else {
      await this.globalSer.presentAlert(
        'Alerta',
        'Disculpe, pero ha ocurrido un error al momento de obtener la información del evento.'
      );
      await this.navCtrl.back();
    }
  }

  async getDataEvent() {
    await this.globalSer.presentLoading();
    const data: any = await this.eventsService.getDetailsEvent(this.id);

    if (data && !data.error) {
      await this.setDataToParams(data);
      this.showButtonEdit = this.userid === data.user?._id || await this.globalSer.checkRoleToActions([0, 1]);
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteEvent() {
    await this.globalSer.presentLoading();
    const data: any = await this.eventsService.deleteEvent(this.id);

    if (data && !data.error) {
      const { msg } = data || {};
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert(
        '¡Éxito!',
        msg || 'Se ha eliminado el evento exitosamente.'
      );
      await this.goBack();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async goBack() {
    await this.navCtrl.back();
  }

  setDataToParams(data: any) {
    this.eventDataForm = {...this.eventDataForm, ...data};
    this.eventData = {...this.eventData, ...data};
    const initFormat = `${data.date} ${data.initHour}`;
    const endFormat = `${data.dateEnd || data.date} ${data.endHour}`;
    const formatDateRet = 'dddd, DD [de] MMMM [de] YYYY, hh:mm a';
    const formatDateWithOutHoursRet = 'dddd, DD [de] MMMM [de] YYYY';
    this.eventData.date = dayjs(initFormat, 'YYYY-MM-DD HH:mm', true)
      .locale('es')
      .format(data.dateEnd ? formatDateRet : formatDateWithOutHoursRet);
    this.eventData.dateEnd = dayjs(endFormat, 'YYYY-MM-DD HH:mm', true)
      .locale('es')
      .format(formatDateRet);
    this.eventData.initHour = dayjs(initFormat, 'YYYY-MM-DD HH:mm', true).format('hh:mm a');
    this.eventData.endHour = data.endHour ?
      dayjs(`${data.dateEnd || data.date} ${data.endHour}`, 'YYYY-MM-DD HH:mm', true).format('hh:mm a')
      : null;

    if (this.showEditForm) this.showEditForm = false;
  }

  setShowEditForm() {
    this.showEditForm = !this.showEditForm;
  }

  getRoleValue(): string {
    const { toRoles } = this.eventData || {};
    let ret = 'CUALQUIER PÚBLICO';
    if (toRoles?.length > 0) {
      ret = '';
      for (const v of toRoles) {
        if (ret === '') ret = this.roles[v];
        else ret += `, ${this.roles[v]}`;
      }
    }
    return `${ret}`.toUpperCase();
  }

  async confirmDeleteAction() {
    await this.globalSer.alertConfirm({
      header: '¡Confirme!',
      message: '¿Está seguro qué desea eliminar este evento?',
      confirmAction: () => this.deleteEvent()
    });
  }

  cancelEditInfo = (): void => { this.setShowEditForm(); };
  saveEditInfo = (data: any): void => { this.setDataToParams(data); };

}
