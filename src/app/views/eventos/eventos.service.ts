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
    if (res && res.success) return res.data.events || [];
    return this.globalSer.altResponse(res);
  }

  async getDetailsEvent(id: string|null = null) {
    const res: any = await this.axios.getData(`/events/${id}`);
    if (res && res.success) return res.data.event || {};
    return this.globalSer.altResponse(res);
  }

  async deleteEvent(id: string|null = null, superadmin = false) {
    const res: any = await this.axios.deleteData(`/events/${id}${superadmin ? '?superadmin=true' : ''}`);
    if (res && res.success) return res.data || {};
    return this.globalSer.altResponse(res);
  }
}
