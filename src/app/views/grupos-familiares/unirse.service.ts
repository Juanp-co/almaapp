import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class UnirseService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async getSessionData() {
    const res: any = await this.axios.getData(`/user`);
    if (res && res.success) return res.data?.data || {};
    return this.globalSer.altResponse(res);
  }

  async getFamiliesGroups(query: any = {}) {
    const res: any = await this.axios.getData('/families-groups', query);
    return res && res.success ? (res.data?.groups || []) : [];
  }

  async saveGroupSelected(data: any = {}) {
    const res: any = await this.axios.putData(`/user/families-groups`, data);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }
}
