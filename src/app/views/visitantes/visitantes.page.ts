import { Component, OnInit } from '@angular/core';
import {AxiosService} from '../../services/axios.service';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-visitantes',
  templateUrl: './visitantes.page.html',
  styleUrls: ['./visitantes.page.scss'],
})
export class VisitantesPage implements OnInit {

  list1 = [
    {},{},{}
  ]
  list2 = [
    {},{},{}
  ]
  opciones = [
    { titulo: 'Red de padres', imagen: 'assets/icon/red.svg', url: 'padres' },
    { titulo: 'Ofrendas', imagen: 'assets/icon/ofrenda.svg', url: 'ofrenda' },
    { titulo: 'Escuela', imagen: 'assets/icon/escuela.svg', url: 'escuela' },
    { titulo: 'Reportes', imagen: 'assets/icon/reportes.svg', url: 'estadistica' },
    { titulo: 'Eventos', imagen: 'assets/icon/calendario.svg', url: 'eventos' },
    { titulo: 'Salir', imagen: 'assets/icon/logout.svg', url: null }
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

  constructor(
    private axiosService: AxiosService,
    private cookiesService: CookiesService,
  ) { }

  ngOnInit() {
    this.getParams();
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

}
