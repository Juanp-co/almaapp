import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalService} from '../../services/global.service';
import {CursoService} from './curso.service';
import {ICursoData} from './course.model';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit, OnDestroy {

  course: ICursoData | null = null;
  dataCourseUser: any = null;
  slug: string | null = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private cookiesService: CookiesService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private coursesService: CursoService,
    private modalController: ModalController,
    private router: Router,
  ) {  }

  async ngOnInit() {
    await this.activateRoute.paramMap.subscribe(paramMap => {
      this.slug = paramMap.get('slug');
    });

    if (this.slug) {
      await this.globalSer.presentLoading();
      const data: any = await this.coursesService.getCourse(this.slug);

      if (data && !data.error) {
        this.course = data.course as ICursoData;
        this.dataCourseUser = data.dataCourseUser;
        if (this.dataCourseUser) {
          this.cookiesService.setCookie(this.slug, this.dataCourseUser);
        }
        await this.globalSer.dismissLoading();
      }
      else if (data && data.error) await this.globalSer.errorSession();
      else await this.globalSer.dismissLoading();
    }
    else {
      await this.globalSer.presentAlert('Alerta', 'Ha ocurrido un error al momento de obtener el dato a consultar');
      await this.navCtrl.back();
    }
  }

  async ionViewDidEnter() {
    this.dataCourseUser = this.cookiesService.getCookie(this.slug);
  }

  ngOnDestroy() {
    this.cookiesService.removeCookie(this.slug);
  }

  async showLikesOrComments(input: string) {
    await this.globalSer.openLikesOrCommentsModals(this.course, input);
  }

  async goToTemary(id: string) {
    await this.router.navigate([`/curso/${this.course.slug}/temario/${id}`]);
  }

}
