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
    private axios: AxiosService,
    private globalSer: GlobalService,
  ) { }

  async updateProfile(data: any): Promise<any | null> {
    const res: any = await this.axios.putData('/user', data);

    if (res && res.success) return res.data.data;
    return this.globalSer.altResponse(res);
  }
}
