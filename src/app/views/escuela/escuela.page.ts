import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {IEscuela} from './escuela.model';
import {EscuelaService} from './escuela.service';
import {GlobalService} from '../../services/global.service';
import {setSaltLinesOrBr} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.page.html',
  styleUrls: ['./escuela.page.scss'],
})
export class EscuelaPage implements OnInit {

  courses: IEscuela[] | null = null;
  totals = 0;
  pages = 0;
  page = 1;
  showSearch = false;
  queryParams: any = {
    input: 'title',
    value: 1,
    page: 1,
    limit: 5,
    title: null
  };

  handlePage = (page: number): void => {
    this.queryParams.page = page;
    this.courses = [];
    this.getCoursesList();
  }

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private escuelaServ: EscuelaService,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/']);
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    if (!this.globalSer.checkSession())
      this.router.navigate(['/']);
    else await this.getTotals();
  }

  async getTotals() {
    this.totals = 0;
    this.pages = 0;
    const totals: any = await this.escuelaServ.getCoursesTotals(this.queryParams);

    if (!!totals && totals >= 0 && !totals.error) {
      this.totals = totals;
      this.pages = this.globalSer.getPagination(totals, this.queryParams.limit);

      if (totals > 0) await this.getCoursesList();
      else {
        this.queryParams.page = 1;
        this.pages = 0;
        this.courses = [];
      }
    }
    else if (!!totals && totals.error) {
      this.queryParams.page = 1;
      this.pages = 0;
      this.courses = [];
      if (totals.status && totals.status === 401) {
        await this.globalSer.dismissLoading();
        await this.globalSer.errorSession();
      }
    }
    else {
      this.queryParams.page = 1;
      this.pages = 0;
      this.courses = [];
    }
  }

  async getCoursesList() {
    await this.globalSer.presentLoading();
    const data: any = await this.escuelaServ.getCourses(this.queryParams);

    if (data && !data.error) {
      this.courses = data as IEscuela[];
      this.courses.forEach(c => {
        c.description = setSaltLinesOrBr(c.description, true);
        if (c.description.length > 150) {
          c.description = `${c.description.substr(0, 150)} ...`;
        }
      });
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  // query actions
  setShowSearch() {
    this.showSearch = !this.showSearch;
  }

  async findData(closeSearch = false) {
    if (closeSearch) this.setShowSearch();
    this.queryParams.page = 1;
    this.pages = 0;
    this.courses = null;
    await this.getTotals();
  }

  async setSortOrder() {
    this.queryParams.value = this.queryParams.value === 1 ? -1 : 1;
    this.queryParams.page = 1;
    this.courses = null;
    await this.getCoursesList();
  }

  async setQueryValues() {

    const updated = (selectedValue: any) => {
      this.queryParams.limit = selectedValue;
      this.queryParams.page = 1;
      this.pages = this.globalSer.getPagination(this.totals, this.queryParams.limit);
      this.courses = null;
      this.getCoursesList();
    };

    await this.globalSer.alertWithList({
      header: 'Resultados por página',
      inputs: [
        {
          name: `results-per-page`,
          type: 'radio',
          label: `5`,
          value: 5,
          checked: this.queryParams.limit === 5,
        },
        {
          name: `results-per-page`,
          type: 'radio',
          label: `10`,
          value: 10,
          checked: this.queryParams.limit === 10,
        },
        {
          name: `results-per-page`,
          type: 'radio',
          label: `25`,
          value: 25,
          checked: this.queryParams.limit === 25,
        },
        {
          name: `results-per-page`,
          type: 'radio',
          label: `50`,
          value: 50,
          checked: this.queryParams.limit === 50,
        },
      ],
      confirmAction: updated
    });
  }

  async goToDetails(slug: string|null = null) {
    await this.router.navigate([`curso/${slug}`]);
  }

}
