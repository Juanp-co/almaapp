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
  referrals: any[] = [];
  users: any[] = [];
  totalsGroups = 0;
  referred: any = null;
  loadAdminData = false;
  allSons = false;
  pages = 0;
  totals: any = {
    own: 0,
    all: 0
  };
  queryParams: any = {
    limit: 10,
    page: 1,
    input: 'names',
    value: 1,
    search: null
  };

  constructor(
    private padreService: PadresService,
    private globalSer: GlobalService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.loadAdminData = await this.globalSer.checkRoleToActions([0, 1, 2]);
  }

  async ionViewWillEnter() {
    this.getData();
    if (this.loadAdminData) this.getTotalsUsersAdmin();
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
    const updateVisits = (data) => {
      // if (data) this.visits = data;
    };
    const content: any = {
      // data: this.visits,
      // id: this.id
    };
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      ModalVisitsPage,
      content,
      false,
      updateVisits
    );
  }

  setAllSons() {
    this.allSons = !this.allSons;
  }
}
