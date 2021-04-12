import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async getMember(id: string, path: string) {
    const res: any = await this.axios.getData(`${path}/${id}`);

    if (res && res.success) return res.data.data;
    return this.globalSer.altResponse(res);
  }

  async saveVisit(data: any) {
    const res: any = await this.axios.postData('user/referrals/visit', data);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }
}
