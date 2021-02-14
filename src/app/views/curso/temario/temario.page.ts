import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GlobalService} from '../../../services/global.service';
import {ModalController, NavController} from '@ionic/angular';
import {TemarioService} from './temario.service';
import {ContenidoClasePage} from '../../modals/contenido-clase/contenido-clase.page';
import {ITemario, ITemarioContent} from './temario.model';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.page.html',
  styleUrls: ['./temario.page.scss'],
})
export class TemarioPage implements OnInit {

  slug: string | null = null;
  themeId: string | null = null;
  theme: ITemario | null = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private temaryService: TemarioService,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    this.slug = this.activateRoute.snapshot.paramMap.get('slug');
    this.themeId = this.activateRoute.snapshot.paramMap.get('themeId');

    if (this.slug && this.themeId) {
      await this.globalSer.presentLoading();
      const data: any = await this.temaryService.getTheme(this.slug, this.themeId);

      if (data && !data.error) {
        this.theme = data as ITemario;
        await this.globalSer.dismissLoading();
      }
      else if (data && data.error) await this.globalSer.errorSession();
      else await this.globalSer.dismissLoading();
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
        if (accumulated === this.theme.content.length) this.theme.view = 2;
      });

      await this.globalSer.dismissLoading();
    }
    else {
      await this.globalSer.presentAlert('Alerta', 'Ha ocurrido un error al momento de cargar el contenido.');
      await this.navCtrl.back();
    }
  }

  async updateHistorical(contentId: string, action: string): Promise<number> {
    return this.temaryService.updateHistorical(this.slug, this.themeId, contentId, action);
  }

  async goToTest() {
  }
}
