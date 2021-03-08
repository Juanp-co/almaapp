import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  login = false;
  userData: any = null;
  user = 'CC12345678';
  pass = 'password';

  opciones = [
    { titulo: 'Red padres', imagen: 'assets/icon/red.svg', url: 'padres' },
    { titulo: 'Ofrendas', imagen: 'assets/icon/ofrenda.svg', url: 'ofrenda' },
    { titulo: 'Escuela', imagen: 'assets/icon/escuela.svg', url: 'escuela' },
    { titulo: 'Reportes', imagen: 'assets/icon/reportes.svg', url: 'estadistica' },
    { titulo: 'Calendario', imagen: 'assets/icon/calendario.svg', url: 'eventos' },
    { titulo: 'Salir', imagen: 'assets/icon/logout.svg', url: null }
  ];

  constructor(
    public axios: AxiosService,
    public cookieService: CookiesService,
    public globalSer: GlobalService,
    public navCtrl: NavController
  ) { }

  async ngOnInit() {
    // await this.getDataLogin();
  }

  async ionViewWillEnter() {
    await this.getDataLogin();
  }

  async getDataLogin() {
    const token = this.cookieService.getCookie('token');
    if (token) {
      this.login = true;
      const data = this.cookieService.getCookie('data');

      if (!data) {
        const res: any = await this.axios.getData('/user');

        if (res && res.success) {
          this.cookieService.setCookie('data', res.data.data);
          this.userData = res.data.data;
          await this.globalSer.dismissLoading();
        }
        else {
          if (res.status && res.status === 401) {
            this.cookieService.removeCookie('token');
            this.login = false;
          }
          await this.globalSer.dismissLoading();
          await this.globalSer.presentAlert('Alerta', res.error);
        }
      }
      else this.userData = data;
    }
    else this.login = false;
  }

  async ingresar() {
    if (this.pass && this.user) {
      await this.globalSer.presentLoading();

      const res: any = await this.axios.postData(
        '/login',
        { document: this.user, password: this.pass }
        );

      if (res && res.success) {
        const { data, token } = res.data;
        this.cookieService.setCookie('token', token);
        this.cookieService.setCookie('data', data);
        this.userData = data;

        this.login = true;
        this.user = null;
        this.pass = null;
        await this.globalSer.dismissLoading();
        // await this.globalSer.presentAlert('Info', 'Ingreso exitoso!');
      }
      else {
        this.user = null;
        this.pass = null;
        await this.globalSer.dismissLoading();
        await this.globalSer.presentAlert('Alerta', res.error);
      }
    } else {
      await this.globalSer.presentAlert('Alerta', 'Asegúrese de indicar su usuario y contraseña.');
    }
  }

  async irMenu(num){
    const opt = this.opciones[num] || null;

    if (opt) {
      if (!opt.url) {
        await this.globalSer.alertConfirm({
          header: 'Salir',
          message: '¿Está seguro qué desea finalizar la sesión?',
          confirmAction: async () => {
            await this.globalSer.presentLoading();
            this.userData = null;
            await this.globalSer.clearAllData();
            this.axios.deleteData('/logout');
            this.login = false;
            await this.globalSer.dismissLoading();
          }
        });
      }
      else await this.navCtrl.navigateForward(opt.url);
    }
  }

  async goTo(link: string) {
    await this.navCtrl.navigateForward(`/${link}`);
  }

}
