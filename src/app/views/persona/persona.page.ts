import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {AlertController, NavController} from '@ionic/angular';
import { CookiesService } from '../../services/cookies.service';
import { GlobalService } from '../../services/global.service';
import {AxiosService} from '../../services/axios.service';
import {departments} from '../../../Utils/locations.data';
import {civilStatus, gender} from '../../../Utils/profile.data';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {

  userData: any;
  id: any = null;
  totalCourses = 0;
  totalReferrals = 0;
  path = '/user/referrals';

  constructor(
    private activateRoute: ActivatedRoute,
    private alertConCtrl: AlertController,
    private axios: AxiosService,
    private cookieService: CookiesService,
    private globalSer: GlobalService,
    private navCtrl: NavController
  ) { }

  async ngOnInit() {
    const token = this.cookieService.getCookie('token');
    if (token) {
      await this.activateRoute.paramMap.subscribe(paramMap => {
        this.id = paramMap.get('personId');
      });
      this.activateRoute.queryParams.subscribe(params => {
        if (params.group) this.path = '/user/group';
      });

      if (this.id) {
        await this.globalSer.presentLoading();
        const res: any = await this.axios.getData(`${this.path}/${this.id}`);

        if (res && res.success) {
          const { data } = res.data;
          this.userData = data.member || null;
          this.userData.civilStatus = civilStatus[this.userData.civilStatus] || null;
          this.userData.gender = gender[this.userData.gender] || null;
          if (this.userData.department) {
            const depto = departments[this.userData.department] || null;
            if (depto) {
              this.userData.department = depto.department;
              if (this.userData.city) this.userData.city = depto.cities[this.userData.city] || null;
            }
          }
          this.totalCourses = data.totalCourses || 0;
          this.totalReferrals = data.totalReferrals || 0;
          await this.globalSer.dismissLoading();
        }
        else {
          await this.globalSer.dismissLoading();
          await this.globalSer.presentAlert('Error', res.error);
        }
      }
      else {
        await this.globalSer.presentAlert('Error', 'Error al obtener el parámetro a consultar.');
        await this.navCtrl.navigateBack(['/']);
      }
    }
    else await this.globalSer.errorSession();
  }

}
