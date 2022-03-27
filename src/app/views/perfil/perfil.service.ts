import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async getProfileData() {
    const res: any = await this.axios.getData('/user');

    if (res && res.success) return res.data.data;
    return this.globalSer.altResponse(res);
  }

  async updatePictureProfile(data = {}): Promise<any> {
    const res: any = await this.axios.putData('/user/picture', data);

    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }

  async getGroup() {
    const res: any = await this.axios.getData('/user/group');
    return res && res.success ? res.data.group : null;
  }

  async getCourses() {
    const res: any = await this.axios.getData('/user/courses');
    return res && res.success ? res.data.courses : [];
  }

  async changePassword(data: any) {
    const res: any = await this.axios.putData('/user/change-password', data);

    if (res && res.success)  return res.data.msg || 'Se ha actualizado la contraseña exitosamente';
    return this.globalSer.altResponse(res);
  }

  /* family group remove */
  async getTotalsInvitations() {
    const res: any = await this.axios.getData(`/user/group/invitations/totals`);
    if (res && res.success) return res.data.totals || 0;
    return this.globalSer.altResponse(res);
  }

  /* family group remove */
  async removeMemberFamilyGroup(id: string , data: any = {}) {
    const res: any = await this.axios.putData(`/user/group/${id}/members/remove`, data);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }


}
