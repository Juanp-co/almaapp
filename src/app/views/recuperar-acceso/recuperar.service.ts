import { Injectable } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';

@Injectable({
  providedIn: 'root'
})
export class RecuperarService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async checkDocument(data: any) {
    const res: any = await this.axios.postData('/recovery-password/check-document', data);

    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }

  async checkParams(data: any) {
    const res: any = await this.axios.postData('/recovery-password/check-params', data);

    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }

  async changePassword(data: any) {
    const res: any = await this.axios.putData('/recovery-password/change-password', data);

    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }
}
