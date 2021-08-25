import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService,
  ) { }

  async getOrganization() {
    const res: any = await this.axios.getData('/organization');
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }

  async getFamiliesGroups() {
    const res: any = await this.axios.getData('/families-groups');
    if (res && res.success) return res.data?.groups || [];
    return this.globalSer.altResponse(res);
  }
}
