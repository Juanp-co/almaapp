import { Component, OnInit } from '@angular/core';
import {ConsolidadosService} from './consolidados.service';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consolidados',
  templateUrl: './consolidados.page.html',
  styleUrls: ['./consolidados.page.scss'],
})
export class ConsolidadosPage implements OnInit {

  timer;
  users: any[]|null = null;
  totals = 0;
  pages = 0;
  queryParams: any = {
    limit: 10,
    page: 1,
    input: 'names',
    value: 1,
    search: null,
    consolidates: true,
  };

  constructor(
    private consolidadosService: ConsolidadosService,
    private globalSer: GlobalService,
    private router: Router,
  ) { }

  ngOnInit() {

  }


  async ionViewWillEnter() {
    if (this.totals === 0) this.getMembersTotals();
  }

  async getMembersTotals() {
    const data = await this.consolidadosService.getTotalMembers(this.queryParams);

    if (data && !data.error) {
      this.totals = data || 0;
      if (this.totals > 0) this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
      else this.pages = 0;
      if (this.pages > 0) {
        this.users = [];
        this.getMembers();
      }
    }
    else if (data && data.error) {
      await this.globalSer.errorSession();
    }
  }

  async getMembers() {
    const data = await this.consolidadosService.getMembers(this.queryParams);
    if (data && !data.error) {
      this.users = [...this.users, ...data];
    }
    else if (data && data.error) {
      await this.globalSer.errorSession();
    }
  }

  async loadData(event: any = null) {
    if (this.users?.length !== this.totals && this.queryParams.page < this.pages) {
      const newPage = this.queryParams.page + 1;
      if (newPage <= this.pages) {
        this.queryParams.page = newPage;
        await this.getMembers();
        event.target.disabled = newPage === this.pages;
        event.target.complete();
      }
    }
    else {
      event.target.disabled = true;
      event.target.complete();
    }
  }

  searchInput(value) {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(async () => {
      this.queryParams.search = value.target.value || null ;
      this.getMembersTotals();
    }, 200);
  }

  async goToAdd() {
    await this.router.navigate([`/consolidados/agregar`]);
  }

}
