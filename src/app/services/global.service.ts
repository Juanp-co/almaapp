import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import {CookiesService} from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  loading;

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public cookieService: CookiesService
  ) { }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Cargando...' });
    return this.loading.present();
  }

  async dismissLoading(){
    await this.loading.dismiss();
  }

  clearAllData() {
    this.cookieService.removeCookie('token');
    this.cookieService.removeCookie('data');
  }

}
