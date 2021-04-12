import { Injectable } from '@angular/core';
import { AxiosService } from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class PadresService {

  constructor(
    private globalSer: GlobalService,
    private axios: AxiosService,
  ) { }

  async getReferrals() {
    const res: any = await this.axios.getData('/user/referrals');
    return res && res.success ? res.data : null;
  }

  async saveMember(data: any) {
    const res: any = await this.axios.postData('/user/referrals', data);

    if (res && res.success) return res.data.msg || 'Se ha registrado el nuevo miebro exitosamente.';
    return this.globalSer.altResponse(res);
  }

  async getFamiliesGroups() {
    const res: any = await this.axios.getData('/families-groups');
    return res && res.success ? res.data.groups : [];
  }
}
