import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {GlobalService} from '../../services/global.service';
import {EventosService} from './eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  events: any = [];
  showFilter = false;
  queryParams: any = {
    input: 'date',
    value: -1,
    limit: 50,
    initDate: null,
    endDate: null,
  };
  logged = false;
  showButtonAdd = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private globalSer: GlobalService,
    private eventsService: EventosService,
    private navCtrl: NavController,
  ) { }

  async ngOnInit() {
  }

  async ionViewDidEnter() {
    this.logged = await this.globalSer.isLoggeded();
    this.showButtonAdd = await this.globalSer.checkRoleToActions([0, 1]);
    this.getEventsList();
  }

  async getEventsList() {
    if (this.showFilter) this.showFilter = false;
    await this.globalSer.presentLoading();
    const data: any = await this.eventsService.getEvents(this.queryParams);

    if (data && !data.error) {
      this.events = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setShowFilter() {
    this.showFilter = !this.showFilter;
  }

  async setOrderData() {
    const alert = await this.alertCtrl.create({
      header: 'Seleccione',
      inputs: [
        {
          name: `order-asc`,
          type: 'radio',
          label: `Antíguas primero`,
          value: 1,
          checked: this.queryParams.value === 1,
        },
        {
          name: `order-desc`,
          type: 'radio',
          label: 'Próximas primero',
          value: -1,
          checked: this.queryParams.value === -1,
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Ok',
          handler: (selectedValue) => {
            this.queryParams.value = selectedValue;
          }
        }
      ]
    });

    await alert.present();
  }

  setDate(input: string, ev: any) {
    this.queryParams[input] = ev.target.value ? `${ev.target.value}`.substr(0, 10) : null;
  }

  resetQueryParams() {
    this.queryParams.input = 'date';
    this.queryParams.value = -1;
    this.queryParams.initDate = null;
    this.queryParams.endDate = null;
  }

  async goTo(id = null) {
    await this.navCtrl.navigateForward(`/eventos/${id || 'crear-evento'}`);
  }

}
