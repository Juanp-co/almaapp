import { Injectable } from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';

@Injectable({
  providedIn: 'root'
})
export class CumpleannosService {

  constructor(
    private globalSer: GlobalService,
    private axios: AxiosService,
  ) { }

  async getBirthdays() {
    const res: any = await this.axios.getData('/birthdays');
    return res && res.success ? (res.data?.birthdayList || []) : [];
  }
}
