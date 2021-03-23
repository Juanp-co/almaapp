import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import dayjs from 'dayjs';
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
    initDate: dayjs().format('YYYY-MM-DD'),
    endDate: null,
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private globalSer: GlobalService,
    private eventsService: EventosService,
    private navCtrl: NavController,
    private modalController: ModalController,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.getEventsList();
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
      this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setShowFilter(){
    this.showFilter = !this.showFilter;
  }

  async setOrderData(){
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

  setDate(input: string) {
    if (this.queryParams[input]) {
      this.queryParams[input] = dayjs(this.queryParams[input]).format('YYYY-MM-DD');
    }
  }

  resetQueryParams() {
    this.queryParams.input = 'date';
    this.queryParams.value = -1;
    this.queryParams.initDate = dayjs().format('YYYY-MM-DD');
    this.queryParams.endDate = null;
  }

}
