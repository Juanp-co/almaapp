import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {CursoService} from './curso.service';
import {ICursoData} from './course.model';
import {GlobalService} from '../../services/global.service';
import {CookiesService} from '../../services/cookies.service';
import {setSaltLinesOrBr} from '../../../Utils/validations.functions';
import {ModalContenidoTemaPage} from './modal-contenido-tema/modal-contenido-tema.page';
import {ModalExamenTemaPage} from './modal-examen-tema/modal-examen-tema.page';

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

  /*
  Temary actions
   */
  async openClassModal(i: number) {
    const open = i === 0 || (this.course.temary[i - 1] && this.course.temary[i - 1].view === 2);
    if (!open) {
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero debe visualizar el tema anterior para poder continuar.');
    }
    else {
      const updateOnDismiss = async () => {
        // send data to update the view history
        const view = await this.updateHistorical(this.course.temary[i]._id, '2');
        if (view) this.course.temary[i].view = view;
        if (this.dataCourseUser){
          const index = this.dataCourseUser.course.temary.findIndex((d: any) => d.temaryId === this.course.temary[i]._id);
          if (index > -1) {
            this.dataCourseUser.course.temary[index].view = this.course.temary[i].view;
            this.cookiesService.setCookie(this.slug, this.dataCourseUser);
          }
          let acc = 0;
          this.dataCourseUser.course.temary.forEach(t => { acc += t.view === 2 ? 1 : 0; });
          if (acc === this.dataCourseUser.course.temary.length) {
            await this.globalSer.presentAlert(
              '¡Éxito!',
              'Ha completado el curso exitosamente. Ahora puede continuar con el siguiente nivel.'
            );
          }
        }
      };
      await this.globalSer.presentLoading();
      const theme = this.course.temary[i] || null;

      if (theme) {
        if (theme.quiz) {
          const updateViewQuiz = (update) => {
            if (update) this.course.temary[i].view = 2;
          };
          const content: any = {
            slug: this.slug,
            themeId: theme._id,
            title: theme.title,
            test: theme.quiz
          };
          await this.globalSer.dismissLoading();
          await this.globalSer.loadModal(
            ModalExamenTemaPage,
            content,
            false,
            updateViewQuiz
          );
        }
        else {
          // send data to update the view history
          this.updateHistorical(this.course.temary[i]._id, '1');
          await this.globalSer.dismissLoading();
          await this.globalSer.loadModal(
            ModalContenidoTemaPage,
            { content: theme },
            false,
            updateOnDismiss
          );
        }
      }
      else {
        await this.globalSer.dismissLoading();
        await this.globalSer.presentAlert('Alerta', 'Ha ocurrido un error al momento de cargar el contenido.');
        await this.navCtrl.back();
      }
    }
  }

  async updateHistorical(themeId: string, action: string): Promise<number> {
    return this.coursesService.updateHistoricalThemeCourse(this.slug, themeId, action);
  }
}
