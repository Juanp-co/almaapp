import { Component, OnInit } from '@angular/core';
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
  views: any = {
    info: {
      show: true,
      title: 'Datos de contacto',
      data: null
    },
    courses: {
      show: false,
      totals: 0,
      data: []
    },
    referrals: {
      show: true,
      totals: 0,
      data: []
    }
  };

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
          this.views.info.data = data.member || null;
          this.views.info.data.civilStatus = civilStatus[this.views.info.data.civilStatus] || null;
          this.views.info.data.gender = gender[this.views.info.data.gender] || null;
          if (this.views.info.data.department) {
            const depto = departments[this.views.info.data.department] || null;
            this.views.info.data.department = depto ? depto.department : null;
            this.views.info.data.city = depto ? (depto.cities[this.views.info.data.city] || null) : null;
          }
          this.views.courses.totals = data.totalCourses || 0;
          this.views.referrals.totals = data.totalReferrals || 0;
          this.views.referrals.data = data.referrals || [];
          await this.globalSer.dismissLoading();
        }
        else {
          await this.globalSer.dismissLoading();
          await this.globalSer.presentAlert('Error', res.error);
          await this.navCtrl.back();
        }
      }
      else {
        await this.globalSer.presentAlert('Error', 'Error al obtener el parámetro a consultar.');
        await this.navCtrl.back();
      }
    }
    else {
      await this.globalSer.errorSession();
      await this.navCtrl.back();
    }
  }

  setShowView(input: string) {
    this.views[input].show = !this.views[input].show;
  }

  setShowGroup(value = false) {
    this.views.referrals.show = value;
    this.views.courses.show = !value;
  }

}
