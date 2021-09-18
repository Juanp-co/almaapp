import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GruposService} from '../grupos.service';
import {GlobalService} from '../../../services/global.service';
import {ReportarPage} from '../reportar/reportar.page';
import {CookiesService} from '../../../services/cookies.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id: any = null;
  group: any = null;
  userData: any = null;
  showMap = false;
  showPrincipal = true;
  showButtonReport = false;
  principalRoles = [
    { input: 'leader', label: 'Líder' },
    { input: 'host', label: 'Anfitrión' },
    { input: 'master', label: 'Maestro' },
    { input: 'helper', label: 'Ayudante' },
  ];

  constructor(
    private activateRoute: ActivatedRoute,
    private cookiesService: CookiesService,
    private globalSer: GlobalService,
    private gruposService: GruposService,
  ) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.userData = this.cookiesService.getCookie('data');
    this.getData();
  }

  async getData() {
    await this.globalSer.presentLoading();
    const data: any = await this.gruposService.getFamilyGroupData(this.id);

    if (data && !data.error) {
      this.group = data;
      this.group.location = [
        {
          type: 'Feature',
          geometry: data.location
        }
      ];
      this.showButtonReport = this.userData?._id === this.group?.members?.leader?._id;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setChangeList() {
    this.showPrincipal = !this.showPrincipal;
  }

  setShowMap() {
    this.showMap = !this.showMap;
  }

  async openModalReport() {
    const content: any = {
      selected: this.group,
      groups: [this.group]
    };
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      ReportarPage,
      content,
      false
    );
  }

}
