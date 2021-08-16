import { Injectable } from '@angular/core';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class EventsFormService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService,
  ) { }

  async addEvent(data: any = {}) {
    const res: any = await this.axios.postData(`/events`, data);
    if (res && res.success) return res.data.event || {};
    return this.globalSer.altResponse(res);
  }

  async updateEvent(id: string|null, data: any = {}) {
    const res: any = await this.axios.putData(`/events/${id}`, data);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }
}
