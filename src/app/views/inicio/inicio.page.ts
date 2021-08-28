import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';
import { GlobalService } from '../../services/global.service';
import {InicioService} from './inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  opciones = [
    { titulo: 'Red de padres', imagen: 'assets/icon/red.svg', url: 'padres' },
    { titulo: 'Ofrendas', imagen: 'assets/icon/ofrenda.svg', url: 'ofrenda' },
    { titulo: 'Escuela', imagen: 'assets/icon/escuela.svg', url: 'escuela' },
    { titulo: 'Reportes', imagen: 'assets/icon/reportes.svg', url: 'estadistica' }
  ];

  // ===============
  params: any = {
    facebook: null,
    instagram: null,
    twitter: null,
    web: null,
    youtube: null,
    banner: null,
    logo: null,
    lastCheckTime: null,
  };
  styleBg = 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/cruz.png")';
  logo = 'assets/logo.png';
  showButtonSocial = false;
  userData: any = null;
  events: any = [];
  devotionals: any = [];
  logged = false;

  constructor(
    private axiosService: AxiosService,
    private cookiesService: CookiesService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private inicioService: InicioService,
  ) { }

  async ngOnInit() {
  }

  async ionViewWillEnter() {
    this.getParams();
    this.getEvents();
    this.getDevotionals();
    const token = await this.cookiesService.getCookie('token');
    if (token) {
      this.logged = true;
      await this.getDataLogin();
    }
  }

  async getDataLogin() {
    const data = this.cookiesService.getCookie('data');

    if (!data) {
      const res: any = await this.inicioService.getSessionData();

      if (res && res.success) {
        this.cookiesService.setCookie('data', res);
        this.userData = res;
      }
      else if (res && res.error) {
        await this.globalSer.errorSession();
      }
    }
    else this.userData = data || null;
  }

  async getParams() {
    const data: any = await this.inicioService.getParamsApp();
    if (data) {
      this.params = {...this.params, ...data};
      this.cookiesService.setCookie('params-app', this.params);
      this.styleBg = `linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${this.params.banner || '/assets/cruz.png'}), url("/assets/cruz.png")`;
      this.logo = `${this.params.logo || '/assets/logo.png'}`;
      this.showButtonSocial = (
        this.params.facebook ||
        this.params.instagram ||
        this.params.twitter ||
        this.params.web ||
        this.params.youtube
      );
    }
  }

  async getEvents() {
    const data: any = await this.inicioService.getEvents({ limit: 6 });
    if (data) {
      this.events = data || [];
    }
  }

  async getDevotionals() {
    const data: any = await this.inicioService.getDevotionals({ limit: 6, input: 'created_at', value: -1 });
    if (data) {
      this.devotionals = data || [];
    }
  }

  async goTo(link: string) {
    await this.navCtrl.navigateForward(`/${link}`);
  }

  async irMenu(num){
    if (!this.logged) {
      await this.globalSer.alertConfirm({
        header: 'Alerta',
        message: 'Disculpe, pero debe iniciar sesión para poder visualizar este contenido.<br><br>¿Desea iniciar sesión?',
        confirmAction: async () => {
          this.goTo('acceder');
        }
      });
    }
    else {
      const opt = this.opciones[num] || null;

      if (opt) {
        await this.navCtrl.navigateForward(opt.url);
      }
    }
  }

  async logout() {
    await this.globalSer.alertConfirm({
      header: 'Salir',
      message: '¿Está seguro qué desea finalizar la sesión?',
      confirmAction: async () => {
        this.userData = null;
        this.logged = false;
        await this.axiosService.deleteData('/logout');
        await this.globalSer.clearAllData();
      }
    });
  }

  async openExternalLink(key: string) {
    try {
      const url = this.params[key] || null;
      if (url) window.open(url, '_system');
      else
        await this.globalSer.presentAlert('Alerta', 'Ha ocurrido un error inesperado al momento de abrir el enlace.');
    }
    catch (e) {
      await this.globalSer.presentAlert('Alerta', 'Ha ocurrido un error inesperado al momento de abrir el enlace.');
    }
  }


}
