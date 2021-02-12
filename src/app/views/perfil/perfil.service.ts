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
    const res: any = await this.axios.getData('/user/group');
    return res && res.success ? res.data.group : null;
  }

  async getCourses() {
    const res: any = await this.axios.getData('/user/courses');
    return res && res.success ? res.data.courses : [];
  }


}
