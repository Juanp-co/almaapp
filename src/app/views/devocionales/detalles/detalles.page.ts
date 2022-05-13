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
  showButtonAdmin = false;
  edit = false;

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

  async ionViewDidEnter() {
    this.showButtonAdmin = await this.globalSer.checkRoleToActions([0, 1]);
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

      this.parseDataToShare(this.devotional);

      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateDevotional(formData: any = {}) {
    await this.globalSer.presentLoading();
    const data: any = await this.devocionalesService.updateDevotional(this.id, formData);

    if (data && !data.error) {
      this.devotional = { ...this.devotional, ...data };
      this.parseDataToShare(this.devotional);
      this.edit = false;
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado el devocional exitosamente.');
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async deleteDevotional() {
    await this.globalSer.presentLoading();
    const data: any = await this.devocionalesService.deleteDevotional(this.id);

    if (data && !data.error) {
      const { msg } = data || {};
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert(
        '¡Éxito!',
        msg || 'Se ha eliminado el devocional exitosamente.'
      );
      await this.goBack();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  goBack() {
    if (this.edit) this.edit = false;
    else this.navCtrl.back();
  }

  handleEdit() {
    this.edit = !this.edit;
  }

  parseDataToShare(data) {
    if (data) {
      const message = data.description ? HtmlToText(data.description) : null;

      this.options = {
        subject: data?.title, // fi. for email
        message: '*' + data?.title + '*\n\n' + message + '\n\n_Vía: CCADV - APP_',
        url: `co.ccadv.app://devocionales/${data?._id}`,
        chooserTitle: 'Selecciona una aplicación para compartir', // Android only, you can override the default share sheet title
        appPackageName: 'co.ccadv.app', // Android only, you can provide id of the App you want to share with
        files: [data.picture || undefined], // an array of filenames either locally or remotely
        // iPadCoordinates: '0,0,0,0' // IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height,
      };
    }
  }

  shareGeneric() {
    this.socialSharing.share(this.options.message, this.options.subject, this.options.files[0] || null, null);
  }

  async confirmDelete() {
    await this.globalSer.alertConfirm({
      message: '¿Está seguro qué desea eliminar este devocional?',
      confirmAction: () => { this.deleteDevotional(); }
    });
  }

  handleBack = (): void => { this.goBack(); };
  handleUpdate = (data: any): void => { this.updateDevotional(data); };


}
