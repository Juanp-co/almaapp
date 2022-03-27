import { Injectable } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

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

  /* NUCLEO FAMILIAR - GRUPOS */
  async saveGroup(data: any = {}) {
    const res: any = await this.axios.postData('/user/group', data);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }

  async updateGroup(id: string , data: any = {}) {
    const res: any = await this.axios.putData(`/user/group/${id}`, data);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }

  async addMemberFamilyGroup(id: string , data: any = {}) {
    const res: any = await this.axios.putData(`/user/group/${id}/members/add`, data);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }

  /* invitations */
  async getInvitations() {
    const res: any = await this.axios.getData(`/user/group/invitations`);
    if (res && res.success) return res.data?.invitations || [];
    return this.globalSer.altResponse(res);
  }
  async approveInvitations(id) {
    const res: any = await this.axios.putData(`/user/group/invitations/${id}`);
    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }
  async rejectInvitations(id) {
    const res: any = await this.axios.deleteData(`/user/group/invitations/${id}`);
    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }
}
