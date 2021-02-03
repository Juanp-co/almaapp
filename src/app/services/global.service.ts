import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  loading;

  constructor(
    public alertCtrl:AlertController,
    public loadingCtrl:LoadingController
  ) { }


  async presentAlert(titulo, mensaje) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    })
    await alert.present();
  }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando...'
    });
    return this.loading.present();
  }

  dismissLoading(){
    this.loading.dismiss()
  }

}
