import { Injectable } from '@angular/core';
import {NavController} from '@ionic/angular';

import {bloodType, civilStatus, companyType, gender, educationLevels, professions} from '../../../../Utils/profile.data';
import {departments} from '../../../../Utils/locations.data';
import {CookiesService} from '../../../services/cookies.service';
import {AxiosService} from '../../../services/axios.service';
import {GlobalService} from '../../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  professionsList: any[] = professions;
  companyTypeList: string[] = companyType;
  departmentsList: any[] = departments;
  educationLevel: string[] = educationLevels;
  bloodTypeList: string[] = bloodType;
  civilStatusList: string[] = civilStatus;
  genderList: string[] = gender;

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private axios: AxiosService,
    private cookieService: CookiesService,
  ) { }

  async updateProfile(data: any): Promise<any | null> {
    await this.globalSer.presentLoading('Actualizando perfil, por favor espere ...');
    const res: any = await this.axios.putData('/user', data);

    if (res && res.success) {
      let userData: any = this.cookieService.getCookie('data');
      if (userData) {
        userData = JSON.parse(userData);
        userData = {...userData, ...res.data.data};
      }
      this.cookieService.setCookie('data', userData);
      await this.globalSer.dismissLoading();
      return res.data.data;
    }
    else {
      if (res.status && res.status === 401) {
        this.cookieService.removeCookie('token');
        return { error: 401 };
      }
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('Alerta', res.error);
      return null;
    }
  }
}
