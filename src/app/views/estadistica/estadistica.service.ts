import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService,
  ) { }

  async getReports(query = {}) {
    const res: any = await this.axios.getData('/user/reports', query);
    if (res && res.success) return res.data?.reports || null;
    return this.globalSer.altResponse(res);
  }

  async getReportsFamiliesGroups(query = {}) {
    const res: any = await this.axios.getData('/admin/reports/families-groups', query);
    if (res && res.success) return res.data?.reports || null;
    return this.globalSer.altResponse(res);
  }
}
