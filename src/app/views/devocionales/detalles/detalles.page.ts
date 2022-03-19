import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import {ActivatedRoute} from '@angular/router';
import {DevocionalesService} from '../devocionales.service';
import {GlobalService} from '../../../services/global.service';
import {NavController} from '@ionic/angular';
import {StorageService} from '../../../services/storage.service';
import 'dayjs/locale/es';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id: string|null = null;
  devotional: any = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private devocionalesService: DevocionalesService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private storageService: StorageService,
  ) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  async ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');

    if (this.id) await this.getDevotionalData();
    else {
      await this.globalSer.presentAlert(
        'Alerta',
        'Disculpe, pero ha ocurrido un error al momento de obtener la información.'
      );
      await this.navCtrl.back();
    }
  }

  async getDevotionalData() {
    await this.globalSer.presentLoading();
    const data: any = await this.devocionalesService.getDevotionalsDetails(this.id);

    if (data && !data.error) {
      data.created_at = dayjs(data.created_at, 'YYYY-MM-DD HH:mm:ss', true)
        .locale('es')
        .format('ddd, DD [de] MMMM [de] YYYY');
      this.devotional = data;
      const list: string[] = await this.storageService.get('devotionals_ids') || [];

      if (!list.includes(this.id)) {
        list.push(this.id);
        await this.storageService.set('devotionals_ids', list);
      }
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  goBack() {
    this.navCtrl.back();
  }

}
