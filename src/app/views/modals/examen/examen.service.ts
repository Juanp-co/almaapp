import { Injectable } from '@angular/core';
import {AxiosService} from '../../../services/axios.service';
import {CookiesService} from '../../../services/cookies.service';
import {GlobalService} from '../../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(
    private globalSer: GlobalService,
    private axios: AxiosService,
    private cookieService: CookiesService
  ) { }

  async getTestTheme(slug: string, themeId: string) {
    const res: any = await this.axios.getData(`/courses/${slug}/theme/${themeId}/test`);
    if (res && res.success) return res.data.test;
    else {
      if (res.status && res.status === 401) {
        this.cookieService.removeCookie('token');
        return { error: 401 };
      }
      await this.globalSer.presentAlert('Alerta', res.error);
      return null;
    }
  }

  async sendAnswer(slug: string, themeId: string, data) {
    const res: any = await this.axios.postData(`/courses/${slug}/theme/${themeId}/test`, { data });
    if (res && res.success) return res.data;
    else {
      if (res.status && res.status === 401) {
        this.cookieService.removeCookie('token');
        return { error: 401 };
      }
      await this.globalSer.presentAlert('Alerta', res.error);
      return null;
    }
  }
}
