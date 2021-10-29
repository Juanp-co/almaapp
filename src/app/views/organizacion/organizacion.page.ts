import { Component, OnInit } from '@angular/core';
import {OrganizacionService} from './organizacion.service';
import {GlobalService} from '../../services/global.service';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.page.html',
  styleUrls: ['./organizacion.page.scss'],
})
export class OrganizacionPage implements OnInit {

  showGroups = false;
  adminRequest = false;
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

  counters = {
    pastors: 0,
    supervisors: 0,
    leaders: 0,
    peoples: 0,
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
    private router: Router,
    private toastController: ToastController,
  ) { }

  async ngOnInit() {
    this.adminRequest = await this.globalSer.checkRoleToActions([0, 1, 2]);
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
          this.counters[k] = data.lvls[k]?.length || 0;
          if (this.counters[k] > 0) {
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
      if (this.adminRequest || data.isLeader) {
        await this.router.navigate([`/grupos-familiares/${data._id}`]);
      }
      else if (
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
      }
    }
    else this.showGroupData = null;
  }

  setView(active = false) {
    this.viewSelected = null;
    this.showGroups = active;
  }
}
