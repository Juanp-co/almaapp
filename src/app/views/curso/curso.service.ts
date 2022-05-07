import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService,
  ) { }

  async getCourse(slug: string) {
    const res: any = await this.axios.getData(`/courses/${slug}`);
    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }

  async getCourseAdmin(slug: string) {
    const res: any = await this.axios.getData(`/admin/courses/${slug}`, { slug: true });
    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }

  /*
    Temary
   */

  async updateHistoricalThemeCourse(slug: string, temaryId: string, action: string): Promise<number|null> {
    const res: any = await this.axios.putData(
      `/courses/${slug}/theme/${temaryId}/${action}`,
    );
    return res && res.success && res.data && res.data.updated ? 2 : null;
  }

  async sendAnswer(slug: string, themeId: string, data) {
    const res: any = await this.axios.postData(`/courses/${slug}/theme/${themeId}/quiz`, { data });
    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }
}
