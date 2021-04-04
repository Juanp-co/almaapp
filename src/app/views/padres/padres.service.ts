import { Injectable } from '@angular/core';
import { AxiosService } from '../../services/axios.service';

@Injectable({
  providedIn: 'root'
})
export class PadresService {

  constructor(
    private axios: AxiosService,
  ) { }

  async getReferrals() {
    const res: any = await this.axios.getData('/user/referrals');
    return res && res.success ? res && res.data : null;
  }

  async getFamiliesGroups() {
    const res: any = await this.axios.getData('/families-groups');
    return res && res.success ? res && res.data.groups : [];
  }
}
