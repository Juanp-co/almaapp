import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AxiosService } from '../../services/axios.service';
import { GlobalService } from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class PadresService {

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private axios: AxiosService,
  ) { }

  async getReferrals() {
    // await this.globalSer.presentLoading();
    const res: any = await this.axios.getData('/user/referrals');

    if (res && res.success) {
      return res.data.referrals || [];
    }

    return [];
  }
}
