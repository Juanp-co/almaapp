import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  constructor(
    private globalSer: GlobalService,
    private axios: AxiosService
  ) { }

  async getCourses(query = {}) {
    const res: any = await this.axios.getData('/courses', query);
    if (res && res.success) return res.data.courses;
    return this.globalSer.altResponse(res);
  }
}
