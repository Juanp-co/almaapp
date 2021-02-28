import { Injectable } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private axios: AxiosService,
    private globalSer: GlobalService
  ) { }

  async getProfileData() {
    const res: any = await this.axios.getData('/user');

    if (res && res.success) return res.data.data;
    return this.globalSer.altResponse(res);
  }

  async getGroup() {
    const res: any = await this.axios.getData('/user/group');
    return res && res.success ? res.data.group : null;
  }

  async getCourses() {
    const res: any = await this.axios.getData('/user/courses');
    return res && res.success ? res.data.courses : [];
  }


}
