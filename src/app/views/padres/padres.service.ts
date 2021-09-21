import { Injectable } from '@angular/core';
import { AxiosService } from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';
import {civilStatus, gender} from '../../../Utils/profile.data';

@Injectable({
  providedIn: 'root'
})
export class PadresService {

  civilStatusList: string[] = civilStatus;
  genderList: string[] = gender;

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

  async getReferrals() {
    const res: any = await this.axios.getData('/user/referrals');
    return res && res.success ? res.data : null;
  }

  async getUsersAdmin(query = {}) {
    const res: any = await this.axios.getData('/admin/users', query);
    if (res && res.success) return res.data?.users || [];
    return this.globalSer.altResponse(res);
  }

  async getTotalUsersAdmin(query = {}) {
    const res: any = await this.axios.getData('/admin/users/counters', query);
    if (res && res.success) return res.data?.totals || 0;
    return 0;
  }

  async saveMember(data: any) {
    const res: any = await this.axios.postData('/user/referrals', data);

    if (res && res.success) return res.data.msg || 'Se ha registrado el nuevo miebro exitosamente.';
    return this.globalSer.altResponse(res);
  }
}
