import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {PersonaService} from './persona.service';
import {ModalVisitasPage} from './modal-visitas/modal-visitas.page';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {

  showInfo = true;
  member: any = null;
  courses: any = {
    totals: 0,
    list: []
  };
  referrals: any = {
    totals: 0,
    data: null
  };
  visits: any[] = [];
  group: any = null;
  id: any = null;
  path = '/user/referrals';

  constructor(
    private activateRoute: ActivatedRoute,
    private globalSer: GlobalService,
    private personaService: PersonaService,
    private navCtrl: NavController
  ) {}

  async ngOnInit() {
    await this.activateRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('personId');
    });
    this.activateRoute.queryParams.subscribe(params => {
      if (params.group) this.path = '/user/group/person';
    });

    if (this.id) {
      await this.globalSer.presentLoading();
      const data: any = await this.personaService.getMember(this.id, this.path);

      if (data && !data.error) {
        this.member = data.member || null;
        this.courses.list = data.courses || [];
        this.courses.totals = this.courses?.list?.length || 0;
        this.referrals.list = data.referrals || [];
        this.referrals.totals = data.totalReferrals || 0;
        this.visits = data.visits || [];
        this.group = { data: data.group || null, totals: data.group?.members?.length || 0 };
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

  setShowView() {
    this.showInfo = !this.showInfo;
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
