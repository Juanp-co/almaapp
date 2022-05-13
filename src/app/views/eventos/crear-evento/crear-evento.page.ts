import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../services/global.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
  ) { }

  async ngOnInit() {
    if (!(await this.globalSer.isLoggeded())) this.navCtrl.back();
  }

  async goBack() { await this.navCtrl.back(); }

}
