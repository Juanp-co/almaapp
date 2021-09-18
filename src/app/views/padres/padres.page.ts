import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';
import {PadresService} from './padres.service';
import {ModalVisitsPage} from './modal-visits/modal-visits.page';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.page.html',
  styleUrls: ['./padres.page.scss'],
})
export class PadresPage implements OnInit {
  referrals: any[] = [];
  totalsGroups = 0;
  referred: any = null;
  totals = 0;

  constructor(
    private padreService: PadresService,
    private globalSer: GlobalService,
    private router: Router,
  ) { }

  async ngOnInit() {
    // await this.getData();
  }

  async ionViewWillEnter() {
    await this.getData();
  }

  async getData() {
    const data = await this.padreService.getReferrals();
    if (data) {
      this.referrals = data.referrals;
      this.referred = data.referred;
      this.totals = data.totals;
      this.totalsGroups = data.totalsGroups;
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
}
