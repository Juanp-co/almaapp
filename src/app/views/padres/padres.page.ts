import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';
import {PadresService} from './padres.service';

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
    private router: Router,
  ) { }

  async ngOnInit() {
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

  async goToFamiliesGroups() {
    await this.router.navigate([`grupos-familiares`]);
  }
}
