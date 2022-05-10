import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AccederService} from './acceder.service';
import {GlobalService} from '../../services/global.service';
import {StorageService} from '../../services/storage.service';
import {onlyNumbersInputValidation2} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-acceder',
  templateUrl: './acceder.page.html',
  styleUrls: ['./acceder.page.scss'],
})
export class AccederPage implements OnInit {

  styleBg = 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/cruz.png")';
  logo = 'assets/logo.png';
  phone: any = null;
  pass: any = null;
  params: any = {
    facebook: null,
    instagram: null,
    twitter: null,
    web: null,
    youtube: null,
    banner: null,
    logo: null,
    lastCheckTime: null,
  };

  constructor(
    private accederService: AccederService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private storageService: StorageService,
  ) { }

  async ngOnInit() {
  }

  async ionViewWillEnter() {
    const token = await this.storageService.get('token');
    if (token) this.goTo();
    else this.getParams();
  }

  async goTo(link = 'inicio') {
    await this.navCtrl.navigateForward(`/${link}`);
  }

  async ingresar() {
    if (this.pass && this.phone) {
      await this.globalSer.presentLoading();

      const res: any = await this.accederService.login({ phone: this.phone, password: this.pass });

      if (res && !res.error) {
        const { data, token } = res;
        await this.storageService.set('token', token);
        await this.storageService.set('data', data);
        await this.globalSer.dismissLoading();
        this.goTo();
      }
      else {
        this.pass = null;
        await this.globalSer.dismissLoading();
      }
    } else {
      await this.globalSer.presentAlert('Alerta', 'Asegúrese de indicar su número de teléfono y contraseña.');
    }
  }

  async getParams() {
    const data: any = await this.accederService.getParamsApp();

    if (data) {
      await this.storageService.set('params-app', data);
      this.params = {...this.params, ...data};
      this.styleBg = `linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.params.banner || '/assets/cruz.png'}), url("/assets/cruz.png")`;
      this.logo = `${this.params.logo || '/assets/logo.png'}`;
    }
  }

  validateOnlyNumber2(event: any) {
    onlyNumbersInputValidation2(event);
  }

}
