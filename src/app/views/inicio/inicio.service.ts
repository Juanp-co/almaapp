import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService,
  ) { }

  async getChurches(): Promise<any | null> {
    const res: any = await this.axios.getData('/churches');
    return res && res.success ? (res.data.churches || []) : [];
  }

  async getEvents(queryParam: any) {
    const res: any = await this.axios.getData(`/events`, queryParam);
    if (res && res.success) return res.data.events || [];
  }

  async getDevotionals(queryParam: any) {
    const res: any = await this.axios.getData(`/devotionals`, queryParam);
    if (res && res.success) return res.data?.devotionals || [];
  }

  async getSessionData() {
    const res: any = await this.axios.getData(`/user`);
    if (res && res.success) return res.data?.data || {};
    return this.globalSer.altResponse(res);
  }

  async getParamsApp() {
    const res: any = await this.axios.getData('params-app');
    if (res && res.success) return res.data?.data || {};
    return null;
  }
}
