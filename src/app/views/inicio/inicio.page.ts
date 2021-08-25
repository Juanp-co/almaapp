import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';
import { GlobalService } from '../../services/global.service';
import {onlyNumbersInputValidation2} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  login = false;
  showButtonSocial = false;
  userData: any = null;
  phone: any = null;
  pass: any = null;
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

  opciones = [
    { titulo: 'Red padres', imagen: 'assets/icon/red.svg', url: 'padres' },
    { titulo: 'Ofrendas', imagen: 'assets/icon/ofrenda.svg', url: 'ofrenda' },
    { titulo: 'Escuela', imagen: 'assets/icon/escuela.svg', url: 'escuela' },
    { titulo: 'Reportes', imagen: 'assets/icon/reportes.svg', url: 'estadistica' },
    { titulo: 'Eventos', imagen: 'assets/icon/calendario.svg', url: 'eventos' },
    { titulo: 'Organización', imagen: 'assets/icon/calendario.svg', url: 'organizacion' },
    { titulo: 'Salir', imagen: 'assets/icon/logout.svg', url: null }
  ];

  constructor(
    private axiosService: AxiosService,
    private cookiesService: CookiesService,
    private globalSer: GlobalService,
    private navCtrl: NavController
  ) { }

  async ngOnInit() {
    // await this.getDataLogin();
  }

  async ionViewWillEnter() {
    this.getParams();
    await this.getDataLogin();
  }

  async getDataLogin() {
    const token = this.cookiesService.getCookie('token');
    if (token) {
      this.login = true;
      const data = this.cookiesService.getCookie('data');

      if (!data) {
        const res: any = await this.axiosService.getData('/user');

        if (res && res.success) {
          this.cookiesService.setCookie('data', res.data.data);
          this.userData = res.data.data;
          await this.globalSer.dismissLoading();
        }
        else {
          if (res.status && res.status === 401) {
            this.cookiesService.removeCookie('token');
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
    if (this.pass && this.phone) {
      await this.globalSer.presentLoading();

      const res: any = await this.axiosService.postData(
        '/login',
        { phone: this.phone, password: this.pass }
        );

      if (res && res.success) {
        const { data, token } = res.data;
        this.cookiesService.setCookie('token', token);
        this.cookiesService.setCookie('data', data);
        this.userData = data;

        this.login = true;
        this.phone = null;
        this.pass = null;
        await this.globalSer.dismissLoading();
      }
      else {
        this.phone = null;
        this.pass = null;
        await this.globalSer.dismissLoading();
        await this.globalSer.presentAlert('Alerta', res.error);
      }
    } else {
      await this.globalSer.presentAlert('Alerta', 'Asegúrese de indicar su número de teléfono y contraseña.');
    }
  }

  async getParams() {
    const res: any = await this.axiosService.getData('params-app');

    if (res && res.success) {
      const { data } = res.data;
      if (data) {
        this.cookiesService.setCookie('params-app', data);
        this.params = {...this.params, ...data};
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
            this.axiosService.deleteData('/logout');
            await this.globalSer.clearAllData();
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

  validateOnlyNumber2(event: any) {
    onlyNumbersInputValidation2(event);
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

  handleErrorImg(e) {
    e.target.src = `/images/assets/logo.png`;
    e.onerror = null;
  }

}
