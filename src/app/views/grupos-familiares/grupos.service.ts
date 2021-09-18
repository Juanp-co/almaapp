import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService,
  ) {}

  async getFamiliesGroups() {
    const res: any = await this.axios.getData('/user/families-groups');
    if (res?.success) return res.data?.groups || [];
    return this.globalSer.altResponse(res);
  }

  async getFamilyGroupData(id: string) {
    const res: any = await this.axios.getData(`/user/families-groups/${id}`);
    if (res?.success)  return res.data?.group || null;
    return this.globalSer.altResponse(res);
  }

  async addReport(id: string, data: any) {
    const res: any = await this.axios.postData(`/user/families-groups/${id}/reports`, data);
    if (res?.success)  return res.data?.msg || 'Se ha agregado el reporte exitosamente.';
    return this.globalSer.altResponse(res);
  }
}
