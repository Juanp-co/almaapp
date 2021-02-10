import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private axios: AxiosService,
    private cookieService: CookiesService,
    private router: Router
  ) { }

  async getProfileData() {
    await this.globalSer.presentLoading();
    const res: any = await this.axios.getData('/user');

    if (res && res.success) {
      this.cookieService.setCookie('data', res.data.data);
      await this.globalSer.dismissLoading();
      return res.data.data;
    }
    else {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', res.error);
      return null;
    }
  }

  async getGroup() {
    // await this.globalSer.presentLoading();
    const res: any = await this.axios.getData('/user/group');

    if (res && res.success) {
      // await this.globalSer.dismissLoading();
      return res.data.group;
    }

    return null;
  }

  async getCourses() {
    // await this.globalSer.presentLoading();
    const res: any = await this.axios.getData('/user/courses');

    if (res && res.success) {
      // await this.globalSer.dismissLoading();
      return res.data.courses;
    }

    return [];
  }


}
