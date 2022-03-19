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

  async save() {
    await this.globalSer.presentLoading('Agregando devocional, por favor espere ...');
    const data: any = await this.devocionalesService.saveDevotionals(this.formData);

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

  onChangeEditor({ editor }: ChangeEvent) {
    this.formData.description = editor?.getData();
  }

  openFile(event) {
    const files = event.target.files;

    if (typeof files[0] !== 'object') return false;
    else {
      this.dataService.resizePhoto(files[0], 900, 'dataURL',  (resizedFile) => {
        this.formData.picture = resizedFile;
      });
    }
  }

  setFormData(input: string, ev: any) {
    this.formData[input] = ev.target.value || null;
  }

  validate() {
    const { title, description, picture, urlVideo } = this.formData;

    if (!picture) return 'Disculpe, pero debe subir una imagen para la portada del devocional.';
    if (!title || title?.length < 5) return 'Disculpe, pero debe indicar un título correcto.';
    if (!description || description?.length < 10) return 'Disculpe, pero debe indicar una descripción correcta.';
    if (urlVideo && !checkYoutubeUrl(urlVideo)) return 'Disculpe, pero la URL de Youtube es incorrecta.';

    return null;
  }

  async confirmSave() {
    const validated = this.validate();

    if (!validated) {
      await this.globalSer.alertConfirm({
        message: '¿Está seguro qué desea crear este devocional?',
        confirmAction: async () => { await this.save(); }
      });
    }
    else await this.globalSer.presentAlert('Confirme', validated);
  }

}
