import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService,
  ) { }

  async getEvents(queryParam: any) {
    const res: any = await this.axios.getData(`/events`, queryParam);
    if (res && res.success) return res.data.events;
    return this.globalSer.altResponse(res);
  }
}
