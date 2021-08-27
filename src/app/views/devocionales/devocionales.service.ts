import { Injectable } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';

@Injectable({
  providedIn: 'root'
})
export class DevocionalesService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService,
  ) { }

  async getTotalsDevotionals(queryParam: any) {
    const res: any = await this.axios.getData(`/devotionals/counters`, queryParam);
    if (res && res.success) return res.data?.data?.totals || 0;
  }

  async getDevotionals(queryParam: any) {
    const res: any = await this.axios.getData(`/devotionals`, queryParam);
    if (res && res.success) return res.data?.devotionals || [];
  }

  async getDevotionalsDetails(id) {
    const res: any = await this.axios.getData(`/devotionals/${id}`);
    if (res && res.success) return res.data?.devotional || null;
  }
}
