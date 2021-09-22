import { Injectable } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private globalSer: GlobalService,
    private axios: AxiosService,
  ) { }

  async getFamiliesGroups(query: any = {}) {
    const res: any = await this.axios.getData('/families-groups', query);
    return res && res.success ? (res.data?.groups || []) : [];
  }

  async getMembers(query: any = {}) {
    const res: any = await this.axios.getData('/members', query);
    if (res && res.success) return res.data?.members || [];
    return this.globalSer.altResponse(res);
  }
}
