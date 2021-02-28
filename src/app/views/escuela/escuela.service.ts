import { Injectable } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private axios: AxiosService
  ) { }

  async getCoursesTotals(query = {}): Promise<any> {
    const res: any = await this.axios.getData('/courses/counters', query);

    if (res && res.success) return res.data.totals;
    return this.globalSer.altResponse(res);
  }

  async getCourses(query = {}) {
    const res: any = await this.axios.getData('/courses', query);
    if (res && res.success) return res.data.courses;
    return this.globalSer.altResponse(res);
  }
}
