import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  loading;

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
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

}
