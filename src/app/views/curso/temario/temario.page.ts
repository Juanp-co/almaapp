import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {ICursoTemarioContent, ICursoTemarioExtended} from '../course.model';
import {ModalContenidoTemaPage} from '../modal-contenido-tema/modal-contenido-tema.page';
import {ModalExamenTemaPage} from '../modal-examen-tema/modal-examen-tema.page';
import {CursoService} from '../curso.service';
import {CookiesService} from '../../../services/cookies.service';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.page.html',
  styleUrls: ['./temario.page.scss'],
})
export class TemarioPage implements OnInit {

  slug: string | null = null;
  themeId: string | null = null;
  theme: ICursoTemarioContent | null = null;
  dataCourseUser: any = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private cookiesService: CookiesService,
    private cursoService: CursoService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private modalController: ModalController,
    private router: Router,
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/']);
    else {
      this.slug = this.activateRoute.snapshot.paramMap.get('slug');
      this.themeId = this.activateRoute.snapshot.paramMap.get('themeId');
    }
  }

  async ngOnInit() {
  }

  async ionViewDidEnter() {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/']);
    else await this.getCoursesList();
  }

  async getCoursesList() {

    if (this.slug && this.themeId) {
      await this.globalSer.presentLoading();
      const data: any = await this.cursoService.getThemeCourse(this.slug, this.themeId);

      if (data && !data.error) {
        this.theme = data as ICursoTemarioContent;
        this.dataCourseUser = this.cookiesService.getCookie(this.slug);
        await this.globalSer.dismissLoading();
      }
      else if (data && data.error) {
        await this.globalSer.dismissLoading();
        await this.globalSer.errorSession();
      }
      else {
        await this.globalSer.dismissLoading();
        await this.navCtrl.back();
      }
    }
    else {
      await this.globalSer.presentAlert('Alerta', 'Ha ocurrido un error al momento de obtener los datos a consultar.');
      await this.navCtrl.back();
    }
  }

  async openClassModal(i: number) {

    const updateOnDismiss = async () => {
      // send data to update the view history
      const view = await this.updateHistorical(content._id, '2');
      if (view) this.theme.content[i].view = view;
      let accumulated = 0;
      this.theme.content.forEach(c => { if (c.view === 2) accumulated++; });
      this.theme.view = accumulated === this.theme.content.length ? 2 : 1;
      if (this.dataCourseUser){
        const index = this.dataCourseUser.temary.findIndex((d: any) => d.temaryId === this.themeId);
        if (index > -1) {
          this.dataCourseUser.temary[index].view = this.theme.view;
          this.cookiesService.setCookie(this.slug, this.dataCourseUser);
        }
      }
    };

    await this.globalSer.presentLoading();
    const content: ICursoTemarioExtended | null = this.theme.content[i] || null;

    if (content) {
      this.theme.content[i].view = 1;
      // send data to update the view history
      this.updateHistorical(content._id, '1');
      await this.globalSer.dismissLoading();

      await this.globalSer.loadModal(
        ModalContenidoTemaPage,
        { content },
        false,
        updateOnDismiss
      );
    }
    else {
      await this.globalSer.presentAlert('Alerta', 'Ha ocurrido un error al momento de cargar el contenido.');
      await this.navCtrl.back();
    }
  }

  async openTestModal() {
    await this.globalSer.presentLoading();
    const content: any = {
      slug: this.slug,
      themeId: this.themeId,
      title: this.theme.title,
      test: null
    };

    const data: any = await this.cursoService.getTestThemeCourse(this.slug, this.themeId);

    if (data && !data.error) {
      if (data && data.length > 0) {
        content.test = data;
        await this.globalSer.dismissLoading();
        await this.globalSer.loadModal(
          ModalExamenTemaPage,
          content,
          false
        );
      }
      else {
        await this.globalSer.dismissLoading();
        await this.globalSer.presentAlert('Alerta', 'Disculpe, pero la pueba actual no está disponible.');
      }
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else {
      await this.globalSer.dismissLoading();
    }
  }

  async updateHistorical(contentId: string, action: string): Promise<number> {
    return this.cursoService.updateHistoricalThemeCourse(this.slug, this.themeId, contentId, action);
  }
}
