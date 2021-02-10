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
    public globalSer: GlobalService,
    public navCtrl: NavController,
    public padreService: PadresService,
    public cookieService: CookiesService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.getData();
  }


  async getData() {
    const token = this.cookieService.getCookie('token');
    if (token) {
      this.referrals = await this.padreService.getReferrals();
    }
    else {
      await this.errorSession();
    }
  }

  async errorSession() {
    await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
    this.globalSer.clearAllData();
    await this.globalSer.dismissLoading();
    await this.navCtrl.navigateBack(['/']);
  }
}
