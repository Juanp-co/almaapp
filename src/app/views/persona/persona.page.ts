import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {PersonaService} from './persona.service';
import {ModalVisitasPage} from './modal-visitas/modal-visitas.page';
import { GlobalService } from '../../services/global.service';
import {departments} from '../../../Utils/locations.data';
import {civilStatus, gender} from '../../../Utils/profile.data';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {

  userData: any;
  visits: any[] = [];
  id: any = null;
  totalCourses = 0;
  totalReferrals = 0;
  group = false;
  path = '/user/referrals';
  views: any = {
    info: {
      show: true,
      title: 'Datos de contacto',
      data: null
    },
    courses: {
      show: false,
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
    private globalSer: GlobalService,
    private personaService: PersonaService,
    private navCtrl: NavController
  ) { }

  async ngOnInit() {
    await this.activateRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('personId');
    });
    this.activateRoute.queryParams.subscribe(params => {
      if (params.group) {
        this.path = '/user/group';
        this.group = true;
      }
    });

    if (this.id) {
      await this.globalSer.presentLoading();
      const data = await this.personaService.getMember(this.id, this.path);

      if (data && !data.error) {
        this.views.info.data = data.member || null;
        this.views.info.data.civilStatus = civilStatus[this.views.info.data.civilStatus] || null;
        this.views.info.data.gender = gender[this.views.info.data.gender] || null;
        if (this.views.info.data.department) {
          const depto = departments[this.views.info.data.department] || null;
          this.views.info.data.department = depto ? depto.department : null;
          this.views.info.data.city = depto ? (depto.cities[this.views.info.data.city] || null) : null;
        }
        this.visits = data.visits || [];
        this.views.courses.data = data.courses || [];
        this.views.referrals.totals = data.totalReferrals || 0;
        this.views.referrals.data = data.referrals || [];
        await this.globalSer.dismissLoading();
      }
      else if (data && data.error) {
        await this.globalSer.dismissLoading();
        await this.globalSer.errorSession();
      }
      else await this.globalSer.dismissLoading();
    }
    else {
      await this.globalSer.presentAlert('Error', 'Error al obtener el parámetro a consultar.');
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

  async showVisits() {
    await this.globalSer.presentLoading();
    const updateVisits = (data) => {
      if (data) this.visits = data;
    };
    const content: any = {
      data: this.visits,
      id: this.id
    };
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      ModalVisitasPage,
      content,
      false,
      updateVisits
    );
  }

}
