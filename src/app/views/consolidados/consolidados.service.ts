import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';
import {civilStatus, gender} from '../../../Utils/profile.data';

@Injectable({
  providedIn: 'root'
})
export class ConsolidadosService {

  civilStatusList: string[] = civilStatus;
  genderList: string[] = gender;

  constructor(
    private globalSer: GlobalService,
    private axios: AxiosService,
  ) { }

  async getTotalMembers(query = {}) {
    const res: any = await this.axios.getData('/members/counters', query);
    if (res && res.success) return res.data?.totals || 0;
    return this.globalSer.altResponse(res);
  }

  async getMembers(query: any = {}) {
    const res: any = await this.axios.getData('/members', query);
    if (res && res.success) return res.data?.members || [];
    return this.globalSer.altResponse(res);
  }

  async saveMember(data: any) {
    const res: any = await this.axios.postData('/user/referrals?consolidates=true', data);
    if (res && res.success) return res.data.msg || 'Se ha registrado el nuevo consolidado exitosamente.';
    return this.globalSer.altResponse(res);
  }
}
