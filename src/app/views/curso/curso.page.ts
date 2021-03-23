import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {CursoService} from './curso.service';
import {ICursoData} from './course.model';
import {GlobalService} from '../../services/global.service';
import {CookiesService} from '../../services/cookies.service';
import {setSaltLinesOrBr} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit, OnDestroy {

  course: ICursoData | null = null;
  dataCourseUser: any = null;
  slug: string | null = null;
  activeClickTemary = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private cookiesService: CookiesService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private coursesService: CursoService,
    private modalController: ModalController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/']);
  }

  async ngOnInit() {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/']);
    else await this.getCourse();
  }

  async getCourse() {
    if (!this.slug) await this.setSlug();

    await this.globalSer.presentLoading();
    const data: any = await this.coursesService.getCourse(this.slug);

    if (data && !data.error) {
      this.course = data.course as ICursoData;
      this.course.description = setSaltLinesOrBr(this.course.description, true);
      this.dataCourseUser = data.dataCourseUser;
      if (data.dataCourseUser) {
        this.cookiesService.setCookie(this.slug, this.dataCourseUser);
        this.activeClickTemary = true;
      }
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async addCourse() {
    await this.globalSer.presentLoading();
    const data: any = await this.coursesService.addCourse(this.slug);

    if (data && !data.error) {
      this.dataCourseUser = data;
      this.cookiesService.setCookie(this.slug, this.dataCourseUser);
      this.activeClickTemary = true;
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert(
        '¡Éxito!',
        'Se ha agregado el curso a su listado. Ahora puede acceder al contenido.'
      );
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async setSlug() {
    await this.activateRoute.paramMap.subscribe(paramMap => {
      this.slug = paramMap.get('slug');
    });
  }

  async ionViewDidEnter() {
    // get data course
    this.dataCourseUser = this.cookiesService.getCookie(this.slug);
  }

  ngOnDestroy() {
    this.cookiesService.removeCookie(this.slug);
  }

  async goToTemary(id: string) {
    await this.router.navigate([`/curso/${this.course.slug}/temario/${id}`]);
  }

  async showAlertRejectAction() {
    await this.globalSer.presentAlert(
      'Alerta',
      'Disculpe, pero no puede acceder al contenido hasta no haber agregado el curso a su listado.'
    );
  }

  async showConfirmAddCourse() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea agregar este curso a su listado?',
      confirmAction: () => this.addCourse()
    });
  }

}
