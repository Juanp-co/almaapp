import { Injectable } from '@angular/core';
import {NavController} from '@ionic/angular';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private axios: AxiosService
  ) { }

  async getCourse(slug: string) {
    const res: any = await this.axios.getData(`/courses/${slug}`);
    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }

  async addCourse(slug: string) {
    const res: any = await this.axios.postData(`/courses/${slug}/add`);
    if (res && res.success) return res.data.added;
    return this.globalSer.altResponse(res);
  }

  /*
    Temary
   */
  async getThemeCourse(slug: string, themeId: string) {
    const res: any = await this.axios.getData(`/courses/${slug}/theme/${themeId}`);
    if (res && res.success) return res.data.theme;
    return this.globalSer.altResponse(res);
  }

  async updateHistoricalThemeCourse(slug: string, temaryId: string, contentId: string, action: string): Promise<number|null> {
    const res: any = await this.axios.putData(
      `/courses/${slug}/theme/${temaryId}/content/${contentId}/${action}`,
    );
    return res && res.success && res.data && res.data.updated ? 2 : null;
  }

  async getTestThemeCourse(slug: string, themeId: string) {
    const res: any = await this.axios.getData(`/courses/${slug}/theme/${themeId}/test`);
    if (res && res.success) return res.data.test;
    return this.globalSer.altResponse(res);
  }

  async sendAnswer(slug: string, themeId: string, data) {
    const res: any = await this.axios.postData(`/courses/${slug}/theme/${themeId}/test`, { data });
    if (res && res.success) return res.data;
    return this.globalSer.altResponse(res);
  }
}
