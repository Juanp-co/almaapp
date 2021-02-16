import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {NavController} from '@ionic/angular';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private axios: AxiosService,
    private cookieService: CookiesService
  ) { }

  async getEvents(queryParam: any) {
    const res: any = await this.axios.getData(`/events`, queryParam);
    if (res && res.success) {
      return res.data.events;
    }
    else {
      if (res.status && res.status === 401) {
        this.cookieService.removeCookie('token');
        return { error: 401 };
      }
      return null;
    }
  }
}
