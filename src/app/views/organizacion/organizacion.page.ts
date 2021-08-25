import { Component, OnInit } from '@angular/core';
import {OrganizacionService} from './organizacion.service';
import {GlobalService} from '../../services/global.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.page.html',
  styleUrls: ['./organizacion.page.scss'],
})
export class OrganizacionPage implements OnInit {

  showGroups = false;
  showGroupData = null;
  organization: any = {
    lvls: {
      pastors: [],
      supervisors: [],
      leaders: [],
      peoples: []
    },
    users: []
  };
  groups: any[] = [];

  views = {
    pastors: true,
    supervisors: false,
    leaders: false,
    peoples: false,
  };

  optsOrganization = [
    { label: 'Pastores', key: 'pastors', icon: 'pastor' },
    { label: 'Supervisores', key: 'supervisors', icon: 'supervisor' },
    { label: 'Líderes', key: 'leaders', icon: 'leader' },
    { label: 'Personas', key: 'peoples', icon: 'peoples' },
  ];
  viewSelected: any = null;

  constructor(
    private globalSer: GlobalService,
    private organizacionService: OrganizacionService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.getOrganization();
    this.getFamiliesGroups();
  }

  async getOrganization() {
    const res: any = await this.organizacionService.getOrganization();

    if (res && !res.error) {
      const { data } = res || {};

      if (data) {
        this.organization.users = data.users || [];
        // set data
        ['pastors', 'supervisors', 'leaders', 'peoples'].forEach(k => {
          const totals = data.lvls[k]?.length || 0;
          if (totals > 0) {
            data.lvls[k].forEach(i => {
              const user = this.organization.users.find(u => u._id === i) || null;
              if (user) {
                if (!user.picture) user.picture = `/assets/icon/${user.gender === 1 ? 'mujer' : 'hombre'}_lista.svg`;
                this.organization.lvls[k].push(user);
              }
            });
          }
        });
        await this.globalSer.dismissLoading();
      }
    }
    else if (res && res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async getFamiliesGroups() {
    const res: any = await this.organizacionService.getFamiliesGroups();

    if (res && !res.error) {
      this.groups = res || [];
      await this.globalSer.dismissLoading();
    }
    else if (res && res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async setViewOrganization(opt = null) {
    if (opt) {
      await this.globalSer.presentLoading();
      this.viewSelected = opt;
      this.viewSelected.list = this.organization.lvls[opt.key];
      await this.globalSer.dismissLoading();
    }
    else this.viewSelected = null;
  }

  /*
  Actions family groups
   */
  async setViewGroupData(data: any = null) {
    if (data) {
      if (
        data.location?.coordinates?.length === 2
        && data.location?.coordinates[0] !== 0
        && data.location?.coordinates[1] !== 0
      ) {
        this.showGroupData = data;
        this.showGroupData.coords = [
          {
            type: 'Feature',
            geometry: data.location
          }
        ];
      }
      else {
        const toast = await this.toastController.create({
          message: 'Disculpe, pero este grupo no ha registrado su ubicación.',
          duration: 3000
        });
        toast.present();
        // await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado la foto de perfil exitosamente.');
      }
    }
    else this.showGroupData = null;
  }

  setView(active = false) {
    this.viewSelected = null;
    this.showGroups = active;
  }
}
