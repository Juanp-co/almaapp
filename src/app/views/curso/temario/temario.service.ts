import { Injectable } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AxiosService} from '../../../services/axios.service';
import {CookiesService} from '../../../services/cookies.service';
import {GlobalService} from '../../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class TemarioService {
  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private axios: AxiosService,
    private cookieService: CookiesService
  ) { }

  async getTheme(slug: string, themeId: string) {
    const res: any = await this.axios.getData(`/courses/${slug}/theme/${themeId}`);
    if (res && res.success) {
      return res.data.theme;
    }
    else {
      if (res.status && res.status === 401) {
        this.cookieService.removeCookie('token');
        return { error: 401 };
      }
      await this.globalSer.presentAlert('Alerta', res.error);
      return null;
    }
  }

  async updateHistorical(slug: string, temaryId: string, contentId: string, action: string): Promise<number|null> {
    const res: any = await this.axios.putData(
      `/courses/${slug}/theme/${temaryId}/content/${contentId}/${action}`,
    );
    return res && res.success && res.data && res.data.updated ? 2 : null;
  }
}
