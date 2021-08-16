import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/es';
import relativeTime from 'dayjs/plugin/relativeTime';
import {EventosService} from '../eventos.service';
import {CookiesService} from '../../../services/cookies.service';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-detalles-evento',
  templateUrl: './detalles-evento.page.html',
  styleUrls: ['./detalles-evento.page.scss'],
})
export class DetallesEventoPage implements OnInit {

  eventData: any = {};
  eventDataForm: any = {};
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
    private cookiesService: CookiesService,
    private eventsService: EventosService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
  ) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  async ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('_id');
    const userData: any = await this.cookiesService.getCookie('data');

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
    this.eventData.date = dayjs(data.date, 'YYYY-MM-DD', true).locale('es').format('dddd, DD [de] MMMM [de] YYYY');
    this.eventData.initHour = dayjs(`${data.date} ${data.initHour}`, 'YYYY-MM-DD HH:mm', true).format('hh:mm a');
    this.eventData.endHour = data.endHour ?
      dayjs(`${data.date} ${data.endHour}`, 'YYYY-MM-DD HH:mm', true).format('hh:mm a')
      : null;
    this.showButtonEdit = true;
    if (data.user) this.showButtonEdit = this.userid === data.user._id;

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
