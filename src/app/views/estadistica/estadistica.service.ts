import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  constructor(
    private globalSer: GlobalService,
    private axios: AxiosService
  ) { }

  async getReports(query = {}) {
    const res: any = await this.axios.getData('/user/reports', query);
    if (res && res.success) return res.data.reports;
    return this.globalSer.altResponse(res);
  }
}
