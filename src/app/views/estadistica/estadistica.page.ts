import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import {Router} from '@angular/router';
import {EstadisticaService} from './estadistica.service';
import {GlobalService} from '../../services/global.service';
import {onlyNumbersInputValidation2} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.page.html',
  styleUrls: ['./estadistica.page.scss'],
})
export class EstadisticaPage implements OnInit {

  opts = ['Ninguno', 'Sub-sector', 'Sector'];
  data: any = null;
  data2: any = null;
  data2Alt: any = null;
  totalityOpt = 0;
  adminRequest = false;
  showFilter = false;
  showFilterFg = false;
  showPersonal = true;
  minInitDate: string = dayjs('2021-01-01').format('YYYY-MM-DD');
  maxInitDate: string = dayjs().format('YYYY-MM-DD');
  minEndDate: string = dayjs('2021-01-01').format('YYYY-MM-DD');
  maxEndDate: string = dayjs().format('YYYY-MM-DD');
  queryParams: any = {
    initDate: null,
    endDate: null,
  };
  queryParamsFg: any = {
    sector: null,
    subSector: null,
    number: null,
    initDate: null,
    endDate: null,
  };

  constructor(
    private globalSer: GlobalService,
    private estadisticaService: EstadisticaService,
    private router: Router,
  ) {
  }

  async ngOnInit() {
    // check if exist session
    if (!(await this.globalSer.checkSession())) this.router.navigate(['/']);
    this.adminRequest = await this.globalSer.checkRoleToActions([0, 1, 2]);
  }

  async ionViewDidEnter() {
    this.getData();
    if (this.adminRequest)
      this.getDataFamiliesGroups();
  }

  validateOnlyNumber(event: any) {
    onlyNumbersInputValidation2(event);
  }

  async getData() {
    await this.globalSer.presentLoading();
    this.data = null;
    const data = await this.estadisticaService.getReports(this.queryParams);

    if (data && !data.error) {
      this.data = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async getDataFamiliesGroups(showLoader = false) {
    if (showLoader) await this.globalSer.presentLoading();
    this.data2 = null;
    const data = await this.estadisticaService.getReportsFamiliesGroups(this.queryParamsFg);

    if (data && !data.error) {
      this.data2 = data;
      if (showLoader) await this.globalSer.dismissLoading();
      this.data2Alt = null;
      await this.setTotalityData(showLoader);
    }
    else if (data && data.error) {
      if (showLoader) await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setShowFilter() {
    if (this.showPersonal) this.showFilter = !this.showFilter;
    else this.showFilterFg = !this.showFilterFg;
  }

  setPersonalReport(showPersonal = false) {
    this.showPersonal = showPersonal;
  }

  async resetQueryParams() {
    if (this.showPersonal) {
      this.queryParams.initDate = null;
      this.queryParams.endDate = null;
      this.showFilter = !this.showFilter;
      this.data = null;
      await this.getData();
    }
    else {
      this.queryParamsFg.initDate = null;
      this.queryParamsFg.endDate = null;
      this.queryParamsFg.sector = null;
      this.queryParamsFg.subSector = null;
      this.queryParamsFg.number = null;
      this.totalityOpt = 0;
      this.showFilterFg = !this.showFilterFg;
      this.data2 = null;
      this.data2Alt = null;
      await this.getDataFamiliesGroups(true);
    }
  }

  async findData() {
    let find = false;
    if (this.queryParams.initDate) {
      this.queryParams.initDate = dayjs(this.queryParams.initDate).format('YYYY-MM-DD');
      find = true;
    }
    if (this.queryParams.endDate) {
      this.queryParams.endDate = dayjs(this.queryParams.endDate).format('YYYY-MM-DD');
      find = this.queryParams.initDate !== null;
    }

    if (find) {
      this.data = null;
      if (!this.showPersonal) await this.getDataFamiliesGroups();
      else await this.getData();
    }
    else this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar una fecha inicial');
  }

  async findDataFg() {
    let find = true;
    if (this.queryParamsFg.initDate) {
      this.queryParamsFg.initDate = dayjs(this.queryParamsFg.initDate).format('YYYY-MM-DD');
    }
    if (this.queryParamsFg.endDate) {
      this.queryParamsFg.endDate = dayjs(this.queryParamsFg.endDate).format('YYYY-MM-DD');
      find = this.queryParamsFg.initDate !== null;
    }

    if (find) {
      this.data2 = null;
      this.data2Alt = null;
      await this.getDataFamiliesGroups(true);
    }
    else await this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe indicar una fecha inicial');
  }

  // totality actions
  async showListTotality() {
    const inputs: any[] = [];
    for (const [index, value] of this.opts.entries()) {
      inputs.push( {
        name: `list-opts`,
        type: 'radio',
        label: value,
        value: index,
        checked: index === this.totalityOpt,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Totalizar por',
      inputs,
      confirmAction: async (value) => {
        this.totalityOpt = value;
        this.data2Alt = null;
        await this.setTotalityData(true);
      }
    });
  }

  async setTotalityData(showLoader = false) {
    if (showLoader) await this.globalSer.presentLoading();
    const data: any[] = [];
    const model = () => ({
      _id: null,
      groupName: null,
      observations: [],
      report: {
        bibleReading: 0,
        brethren: 0,
        brethrenPlanning: 0,
        christianChildren: 0,
        christianChildrenFriends: 0,
        churchAttendance: 0,
        churchAttendanceChildren: 0,
        consolidated: 0,
        conversions: 0,
        conversionsChildren: 0,
        discipleshipVisits: 0,
        friends: 0,
        offering: 0,
        reconciliations: 0,
        scheduledVisits: 0,
        total: 0,
      }
    });
    const getReportCounter = (report: any, rData: any) => {
      report.bibleReading += rData?.bibleReading || 0;
      report.brethren += rData?.brethren || 0;
      report.brethrenPlanning += rData?.brethrenPlanning || 0;
      report.christianChildren += rData?.christianChildren || 0;
      report.christianChildrenFriends += rData?.christianChildrenFriends || 0;
      report.churchAttendance += rData?.churchAttendance || 0;
      report.churchAttendanceChildren += rData?.churchAttendanceChildren || 0;
      report.consolidated += rData?.consolidated || 0;
      report.conversions += rData?.conversions || 0;
      report.conversionsChildren += rData?.conversionsChildren || 0;
      report.discipleshipVisits += rData?.discipleshipVisits || 0;
      report.friends += rData?.friends || 0;
      report.offering += rData?.offering || 0;
      report.reconciliations += rData?.reconciliations || 0;
      report.scheduledVisits += rData?.scheduledVisits || 0;
      report.total += rData?.total || 0;
      return report;
    };
    let currentGroup: number|null = null;
    this.data2Alt = null;

    if (this.totalityOpt !== 0) {
      let modelData: any = model();
      const { length } = this.data2;
      this.data2.forEach((d: any, i: number) => {
        if (d.group[this.totalityOpt === 1 ? 'subSector' : 'sector'] !== currentGroup) {
          if (currentGroup !== null) data.push(modelData);
          currentGroup = d.group[this.totalityOpt === 1 ? 'subSector' : 'sector'];
          modelData = model();
          modelData._id = i;
          modelData.groupName = `Sector: ${d.group.sector}`;
          if (this.totalityOpt === 1)
            modelData.groupName += ` - SS: ${d.group.subSector}`;
        }

        // concat observations list
        modelData.observations = modelData.observations?.concat(d.observations || []);
        // set data reports
        modelData.report = getReportCounter(modelData.report, d.report);
      });

      if (length > 0 && data.length === 0 && modelData) data.push(modelData);
    }
    else {
      let modelData: any = model();
      this.data2.forEach(d => {
        modelData = model();
        modelData._id = d.group._id;
        modelData.groupName = `S: ${d.group.sector}`;
        modelData.groupName += ` - SS: ${d.group.subSector}`;
        modelData.groupName += ` - #: ${d.group.number}`;

        // concat observations list
        modelData.observations = modelData.observations?.concat(d.observations || []);

        // set data reports
        modelData.report = getReportCounter(modelData.report, d.report);
        data.push(modelData);
      });
    }
    this.data2Alt = data;

    if (showLoader) await this.globalSer.dismissLoading();
  }

}
