import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalVisitsPage} from './modal-visits/modal-visits.page';
import {PadresService} from './padres.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.page.html',
  styleUrls: ['./padres.page.scss'],
})
export class PadresPage implements OnInit {
  timer;
  referrals: any[] = [];
  users: any[] = [];
  totalsGroups = 0;
  referred: any = null;
  loadAdminData = false;
  allSons = false;
  pages = 0;
  optTypes = [
    { label: 'Todos', value: undefined },
    { label: 'Consolidados', value: true },
  ];
  totals: any = {
    own: 0,
    all: 0
  };
  queryParams: any = {
    limit: 10,
    page: 1,
    input: 'names',
    value: 1,
    search: null,
    consolidates: undefined,
  };

  constructor(
    private padreService: PadresService,
    private globalSer: GlobalService,
    private router: Router,
  ) { }

  async ngOnInit() {}

  async ionViewWillEnter() {
    this.loadAdminData = await this.globalSer.checkRoleToActions([0, 1, 2]);
    if (this.loadAdminData) await this.getTotalsUsersAdmin();
    this.getData();
  }

  async getData() {
    const data = await this.padreService.getReferrals();
    if (data) {
      this.referrals = data.referrals;
      this.referred = data.referred;
      this.totals.own = data.totals;
      this.totalsGroups = data.totalsGroups;
    }
  }

  async getTotalsUsersAdmin() {
    const counter = await this.padreService.getTotalUsersAdmin(this.queryParams);
    this.totals.all = counter || 0;
    if (this.totals.all > 0) this.pages = this.globalSer.getPagination(this.totals.all, this.queryParams.limit);
    else this.pages = 0;
    if (this.pages > 0) {
      this.users = [];
      this.getUsersAdmin();
    }
  }

  async getUsersAdmin() {
    const users = await this.padreService.getUsersAdmin(this.queryParams);
    if (users) this.users = [...this.users, ...users];
  }

  async removeMemberAction(id) {
    await this.globalSer.presentLoading('Quitando hijo espiritual. Por favor, espere...');
    const res: any = await this.padreService.removeMember(id);

    if (res && !res.error) {
      this.referrals = this.referrals.filter(r => r._id !== id);
      this.totals.own -= 1;
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', res || 'Se ha actualizado el listado de miembros exitosamente.');
    }
    else if (res && res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async loadData(event: any = null) {
    if (this.users?.length !== this.totals && this.queryParams.page < this.pages) {
      const newPage = this.queryParams.page + 1;
      if (newPage <= this.pages) {
        this.queryParams.page = newPage;
        await this.getUsersAdmin();
        event.target.disabled = newPage === this.pages;
        event.target.complete();
      }
    }
    else {
      event.target.disabled = true;
      event.target.complete();
    }
  }

  async goToAddNewMember() {
    await this.router.navigate([`/padres/nuevo-miembro`]);
  }

  async showVisits() {
    await this.globalSer.presentLoading();
    const content: any = {};
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      ModalVisitsPage,
      content,
      false
    );
  }

  searchInput(value) {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(async () => {
      this.queryParams.search = value.target.value || null ;
      this.getTotalsUsersAdmin();
    }, 200);
  }

  setAllSons(value = true) {
    this.queryParams.search = null;
    if (!this.allSons) this.getTotalsUsersAdmin();
    this.allSons = value;
  }

  async confirmRemove(id: string|null = null) {
    if (id) {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea quitar a este hijo espiritual?',
        confirmAction: () => this.removeMemberAction(id)
      });
    }
  }

  async showOptList() {
    const inputs: any = [];
    for (const v of this.optTypes) {
      inputs.push({
        name: `value-${v.value}`,
        type: 'radio',
        label: v.label,
        value: v.value,
        checked: this.queryParams.consolidates === v.value,
      });
    }

    const updateData = (selectedValue: any) => {
      this.queryParams.consolidates = selectedValue;
      this.getTotalsUsersAdmin();
    };

    await this.globalSer.alertWithList({
      inputs,
      confirmAction: updateData
    });
  }

  removeMembersFamily = (id): void => { this.confirmRemove(id); };
}
