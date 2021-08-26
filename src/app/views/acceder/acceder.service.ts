import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AccederService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService,
  ) { }

  async login(data: any = {}) {
    const res: any = await this.axios.postData('login', data);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }

  async getParamsApp() {
    const res: any = await this.axios.getData('params-app');
    if (res && res.success) return res.data?.data || {};
    return null;
  }
}
