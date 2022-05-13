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
    return 0;
  }

  async saveDevotionals(data: any = {}) {
    const res: any = await this.axios.postData(`/admin/devotionals`, data);
    if (res && res.success) return res.data || null;
    return this.globalSer.altResponse(res);
  }

  async getDevotionals(queryParam: any) {
    const res: any = await this.axios.getData(`/devotionals`, queryParam);
    if (res && res.success) return res.data?.devotionals || [];
    return [];
  }

  async getDevotionalsDetails(id) {
    const res: any = await this.axios.getData(`/devotionals/${id}`);
    if (res && res.success) return res.data?.devotional || null;
    return this.globalSer.altResponse(res);
  }

  async updateDevotional(id, formData: any = {}) {
    const res: any = await this.axios.putData(`/admin/devotionals/${id}?superadmin=true`, formData);
    if (res && res.success) return res.data?.devotional || null;
    return this.globalSer.altResponse(res);
  }

  async deleteDevotional(id) {
    const res: any = await this.axios.deleteData(`/admin/devotionals/${id}?superadmin=true`);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }
}
