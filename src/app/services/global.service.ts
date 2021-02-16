import { Injectable } from '@angular/core';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {CookiesService} from './cookies.service';
import {LikesModalPage} from '../views/modals/likes-modal/likes-modal.page';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  loading;

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private cookieService: CookiesService,
    private modalController: ModalController
  ) { }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertConfirm(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentLoading(message: string | null = null )  {
    this.loading = await this.loadingCtrl.create({ message: message || 'Cargando...' });
    return this.loading.present();
  }

  async dismissLoading(){
    await this.loading.dismiss();
  }

  clearAllData() {
    this.cookieService.removeCookie('token');
    this.cookieService.removeCookie('data');
  }

  async errorSession() {
    await this.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
    this.clearAllData();
    await this.dismissLoading();
    await this.navCtrl.navigateBack(['/']);
  }

  async openLikesOrCommentsModals(data: any, input: string) {
    if (data && data[input]) {
      const titles = {
        likes: 'Me gusta',
        unlikes: 'No me gusta',
        comments: 'Comentarios'
      };
      const persons = data[input].map(l => {
        return {
          user: l.user,
          comment: input === 'comments' ? l.comment : null,
          date: l.created_at,
        };
      });

      const modal = await this.modalController.create({
        component: LikesModalPage,
        componentProps: {
          persons,
          titleModal: titles[input],
          iconModal: input
        }
      });
      return await modal.present();
    }
  }

}
