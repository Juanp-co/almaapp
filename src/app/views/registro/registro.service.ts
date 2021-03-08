import { Injectable } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async register(data: any) {
    const res: any = await this.axios.postData('/register', data);

    if (res && res.success) return res.data.msg;
    return this.globalSer.altResponse(res);
  }
}
