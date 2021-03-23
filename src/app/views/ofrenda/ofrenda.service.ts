import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class OfrendaService {

  constructor(
    private globalSer: GlobalService,
    private axios: AxiosService,
  ) { }

  async getBanksList() {
    const res: any = await this.axios.getData(`/banks`);
    if (res && res.success) return res.data.banks || [];
    return this.globalSer.altResponse(res);
  }
}
