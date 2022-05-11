import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {PersonaService} from './persona.service';
import {ModalVisitasPage} from './modal-visitas/modal-visitas.page';
import { GlobalService } from '../../services/global.service';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {

  showInfo = true;
  adminAction = false;
  member: any = null;
  referred: any = null;
  courses: any = {
    totals: 0,
    list: []
  };
  referrals: any = {
    totals: 0,
    data: null
  };
  visits: any[] = [];
  churches: any[] = [];
  group: any = null;
  id: any = null;
  path = '/user/referrals';

  constructor(
    private activateRoute: ActivatedRoute,
    private globalSer: GlobalService,
    private personaService: PersonaService,
    private navCtrl: NavController,
    private storageService: StorageService,
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
      this.churches = await this.storageService.get('churches');
      const data: any = await this.personaService.getMember(this.id, this.path);

      if (data && !data.error) {
        this.member = data.member || null;
        this.referred = data.referred || null;
        this.courses.list = data.courses || [];
        this.courses.totals = this.courses?.list?.length || 0;
        this.referrals.list = data.referrals || [];
        this.referrals.totals = data.totalReferrals || 0;
        this.visits = data.visits || [];
        this.group = { data: data.group || null, totals: data.group?.members?.length || 0 };
        const church = this.churches.find(c => c._id === this.member.church);
        this.member.church = church?.name || null;
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

  async ionViewDidEnter() {
    this.adminAction = await this.globalSer.checkRoleToActions([0]);
  }

  async setAsConsolidator() {
    await this.globalSer.presentLoading('Cargando. Por favor, espere...');
    const updated: any = await this.personaService.setAsConsolidator(this.member._id);

    if (updated && !updated.error) {
      this.member.consolidator = !this.member.consolidator;
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert(
        '¡Éxito!',
        updated || 'Se ha actualizado la información del miembro exitosamente.'
      );
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
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

  handleSetAsConsolidator = (): void => { this.setAsConsolidator(); };

}
