import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {DevocionalesService} from '../devocionales.service';
import {DataService} from '../../../services/data.service';
import {GlobalService} from '../../../services/global.service';
import {checkTitlesOrDescriptions, checkYoutubeUrl} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  Editor = ClassicEditor;
  isAdmin = false;
  configEditor: any = null;
  formData: any = {
    title: null,
    description: null,
    urlVideo: null,
    picture: null,
  };

  constructor(
    private dataService: DataService,
    private devocionalesService: DevocionalesService,
    private globalSer: GlobalService,
    private navCtrl: NavController,
  ) {
    this.configEditor = this.globalSer.configEditor;
    this.configEditor.placeholder = 'Indica la descripción del devocional aquí (*) ...';
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.isAdmin = await this.globalSer.checkRoleToActions([0, 1, 2]);
    if (!this.isAdmin) {
      await this.globalSer.presentAlert('¡Error!', 'Disculpe, pero no cuenta con privilegios para realizar esta acción.');
      await this.goBack();
    }
  }

  async save(formData: any = {}) {
    await this.globalSer.presentLoading('Agregando devocional, por favor espere ...');
    const data: any = await this.devocionalesService.saveDevotionals(formData);

    if (data && !data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha agregado el devocional exitosamente.');
      await this.navCtrl.back();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async goBack() { await this.navCtrl.back(); }

  handleSave = (data: any): void => { this.save(data); };
  handleCancel = (): void => { this.goBack(); };

}
