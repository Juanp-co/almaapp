import {Component, Input, OnInit} from '@angular/core';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/es';
import relativeTime from 'dayjs/plugin/relativeTime';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.scss'],
})
export class EventcardComponent implements OnInit {

  @Input() data: any;
  eventData: any = {
    _id: null,
    title: null,
    user: null,
    description: null,
    date: null,
    initHour: null,
    endHour: null,
  };

  constructor(
    private alertController: AlertController
  ) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  ngOnInit() {
    if (this.data) {
      this.eventData._id = this.data._id;
      this.eventData.title = this.data.title;
      this.eventData.user = this.data.user;
      this.eventData.description = this.data.description;
      this.eventData.date = dayjs(this.data.date).locale('es').format('dddd, DD [de] MMMM [de] YYYY');
      this.eventData.initHour = dayjs(`${this.data.date} ${this.eventData.initHour}`).format('hh:mm a');
      this.eventData.endHour = this.data.endHour ?
        dayjs(`${this.data.date} ${this.data.endHour}`).format('hh:mm a')
        : null;
    }
  }

  async showEvent(){
    const alert = await this.alertController.create({
      header: this.eventData.title,
      subHeader: `Por: ${this.eventData.user ? `${this.eventData.user.names} ${this.eventData.user.lastNames}` : 'Anónimo'}`,
      message: `
        <b>Fecha:</b> ${this.eventData.date}<br/>
        <b>Hora de inicio:</b> ${this.eventData.initHour}<br/>
        ${this.eventData.endHour ? `<b>Hora fin:</b> ${this.eventData.endHour}<br/>` : ''}
        <b>Descripción:</b> ${this.eventData.description || 'No especificada.'}<br/>
      `,
      buttons: ['Ok']
    });

    await alert.present();
  }
}
