import { Injectable } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private axios: AxiosService,
    private cookieService: CookiesService
  ) { }

  async getCourse(slug: string) {
    const res: any = await this.axios.getData(`/courses/${slug}`);
    if (res && res.success) {
      await this.globalSer.dismissLoading();
      return res.data;
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
