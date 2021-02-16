import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalService} from '../../../services/global.service';
import {ModalController, NavController} from '@ionic/angular';
import {TemarioService} from './temario.service';
import {ContenidoClasePage} from '../../modals/contenido-clase/contenido-clase.page';
import {ExamenPage} from '../../modals/examen/examen.page';
import {ITemario, ITemarioContent} from './temario.model';
import {CookiesService} from '../../../services/cookies.service';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.page.html',
  styleUrls: ['./temario.page.scss'],
})
export class TemarioPage implements OnInit {

  slug: string | null = null;
  themeId: string | null = null;
  theme: ITemario | null = null;
  dataCourseUser: any = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private cookiesService: CookiesService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private temaryService: TemarioService,
    private modalController: ModalController,
    private router: Router,
  ) {
  }

  async ngOnInit() {
    this.slug = this.activateRoute.snapshot.paramMap.get('slug');
    this.themeId = this.activateRoute.snapshot.paramMap.get('themeId');

    if (this.slug && this.themeId) {
      await this.globalSer.presentLoading();
      const data: any = await this.temaryService.getTheme(this.slug, this.themeId);

      if (data && !data.error) {
        this.theme = data as ITemario;
        this.dataCourseUser = this.cookiesService.getCookie(this.slug);
        await this.globalSer.dismissLoading();
      }
      else if (data && data.error) await this.globalSer.errorSession();
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

  async showLikesOrComments(input: string) {
    await this.globalSer.openLikesOrCommentsModals(this.theme, input);
  }

  async openClassModal(i: number) {
    await this.globalSer.presentLoading();
    const content: ITemarioContent | null = this.theme.content[i] || null;

    if (content) {
      this.theme.content[i].view = 1;
      // send data to update the view history
      this.updateHistorical(content._id, 'watching');

      const modal = await this.modalController.create({ component: ContenidoClasePage, componentProps: { content } });
      await modal.present();

      modal.onDidDismiss().then(async () => {
        // send data to update the view history
        const view = await this.updateHistorical(content._id, 'viewed');
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
      });

      await this.globalSer.dismissLoading();
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
      test: null
    };

    const data: any = await this.temaryService.getTestTheme(this.slug, this.themeId);

    if (data && !data.error) {
      if (data && data.length > 0) {
        content.test = data;
        const modal = await this.modalController.create({ component: ExamenPage, componentProps: { content } });
        await modal.present();
        await this.globalSer.dismissLoading();
      }
      else {
        await this.globalSer.presentAlert('Alerta', 'Disculpe, pero la pueba actual no está disponible.');
      }
    }
    else if (data && data.error) await this.globalSer.errorSession();
    else {
      await this.globalSer.dismissLoading();
    }
  }

  async updateHistorical(contentId: string, action: string): Promise<number> {
    return this.temaryService.updateHistorical(this.slug, this.themeId, contentId, action);
  }

  async goToTest() {
    await this.router.navigate([`/curso/${this.slug}/temario/${this.themeId}/examen`]);
  }
}
