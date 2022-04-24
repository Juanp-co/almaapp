import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SocialSharing} from '@awesome-cordova-plugins/social-sharing/ngx';
import {NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import {DevocionalesService} from '../devocionales.service';
import {GlobalService} from '../../../services/global.service';
import {StorageService} from '../../../services/storage.service';
import HtmlToText from '../../../../Utils/HtmlToText';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
  providers: [ SocialSharing ]
})
export class DetallesPage implements OnInit {

  id: string|null = null;
  devotional: any = null;
  options: any = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private devocionalesService: DevocionalesService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private socialSharing: SocialSharing,
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

      const message = this.devotional.description ? HtmlToText(this.devotional.description) : null;

      this.options = {
        subject: this.devotional?.title, // fi. for email
        message: '*' + this.devotional?.title + '*\n\n' + message + '\n\n_Vía: CCADV - APP_',
        url: `co.ccadv.app://devocionales/${this.devotional?._id}`,
        chooserTitle: 'Selecciona una aplicación para compartir', // Android only, you can override the default share sheet title
        appPackageName: 'co.ccadv.app', // Android only, you can provide id of the App you want to share with
        files: [this.devotional.picture || undefined], // an array of filenames either locally or remotely
        // iPadCoordinates: '0,0,0,0' // IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height,
      };

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

  shareGeneric() {
    this.socialSharing.share(this.options.message, this.options.subject, this.options.files[0] || null, null);
  }

}
