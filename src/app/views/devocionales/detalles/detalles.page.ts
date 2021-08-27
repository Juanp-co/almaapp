import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DevocionalesService} from '../devocionales.service';
import {GlobalService} from '../../../services/global.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id: string|null = null;
  devotional: any = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private devocionalesService: DevocionalesService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    ) { }

  async ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');

    if (this.id) await this.getDevotionalData();
    else {
      await this.globalSer.presentAlert(
        'Alerta',
        'Disculpe, pero ha ocurrido un error al momento de obtener la información.'
      );
      await this.navCtrl.back();
    }
  }

  async getDevotionalData() {
    await this.globalSer.presentLoading();
    const data: any = await this.devocionalesService.getDevotionalsDetails(this.id);

    if (data && !data.error) {
      this.devotional = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  goBack() {
    this.navCtrl.back();
  }

}
