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

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private padreService: PadresService,
    private cookieService: CookiesService,
  ) { }

  async ngOnInit() {
    await this.getData();
  }

  async getData() {
    const token = this.cookieService.getCookie('token');
    if (token) {
      this.referrals = await this.padreService.getReferrals();
    }
    else await this.globalSer.errorSession();
  }
}
