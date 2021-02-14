import { Injectable } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private axios: AxiosService,
    private cookieService: CookiesService,
  ) { }

  async getCourses() {
    const res: any = await this.axios.getData('/courses');
    if (res && res.success) {
      await this.globalSer.dismissLoading();
      return res.data.courses;
    }
    else {
      if (res.status && res.status === 401) {
        this.cookieService.removeCookie('token');
        return { error: 401 };
      }
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', res.error);
      return null;
    }
  }
}
