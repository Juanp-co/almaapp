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
  sectors: any[] = [];
  sectorSelected: any = null;
  subSectorSelected: any = null;
  subSectors: any = null;
  subSectorsGroups: any = null;
  groupsData: any[] = [];

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
    await this.getOrganization();
    await this.getFamiliesGroups();
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
      this.groupsData = res || [];
      this.sectors = [...new Set(res?.map(r => r.sector) || [])];
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
  setSubSectorsList(sectorGroup: any = null) {
    if (sectorGroup) {
      this.subSectors = [
        ...new Set(this.groupsData?.filter(gd => gd.sector === sectorGroup) || [])
      ];
      this.sectorSelected = sectorGroup;
    }
    else {
      this.subSectors = null;
      this.sectorSelected = null;
    }
  }

  setViewSubGroupsData(ss) {
    if (ss) {
      this.subSectorsGroups = [
        ...new Set(this.groupsData.filter(gd => gd.sector === this.sectorSelected && gd.subSector === ss))
      ];
      this.subSectorSelected = ss;
    }
    else {
      this.subSectorsGroups = null;
      this.subSectorSelected = null;
    }
  }

  async setViewGroupData(v) {
    if (v) {
      const group = this.groupsData.find(gd => (
        gd.sector === this.sectorSelected && gd.subSector === this.subSectorSelected && gd.number === v
      ));
      if (group) {
        if (this.adminRequest || group.isLeader) {
          await this.router.navigate([`/grupos-familiares/${group._id}`]);
        }
        else if (
          group.location?.coordinates?.length === 2
          && group.location?.coordinates[0] !== 0
          && group.location?.coordinates[1] !== 0
        ) {
          this.showGroupData = group;
          this.showGroupData.coords = [
            {
              type: 'Feature',
              geometry: group.location
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
    }
    else this.showGroupData = null;
  }

  setView(active = false) {
    this.viewSelected = null;
    this.showGroups = active;
  }

  handleClickAction1 = (v: any): void => { this.setSubSectorsList(v); };
  handleClickAction2 = (v: any): void => { this.setViewSubGroupsData(v); };
  handleClickAction3 = (v: any): void => { this.setViewGroupData(v); };
}
