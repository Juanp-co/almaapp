import {Component, Input, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {DevocionalesService} from '../../../views/devocionales/devocionales.service';
import {DataService} from '../../../services/data.service';
import {GlobalService} from '../../../services/global.service';
import {checkYoutubeUrl} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-devocionales-form',
  templateUrl: './devocionales-form.component.html',
  styleUrls: ['./devocionales-form.component.scss'],
})
export class DevocionalesFormComponent implements OnInit {

  @Input() data;
  @Input() handleCancel: () => void;
  @Input() handleSave: (data: any) => void;
  Editor = ClassicEditor;
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
    private globalSer: GlobalService
  ) {
    this.configEditor = this.globalSer.configEditor;
    this.configEditor.placeholder = 'Indica la descripción del devocional aquí (*) ...';
  }

  ngOnInit() {
    if (this.data) {
      this.formData = {
      };

      this.formData.title = this.data.title || null;
      this.formData.description = this.data.description || null;
      this.formData.urlVideo = this.data.urlVideo || null;
      this.formData.picture = this.data.picture || null;
    }
  }

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

  async confirmAction(update = false) {
    const validate = this.validate();

    if (!validate) {
      await this.globalSer.alertConfirm({
        header: '¡Confirme!',
        message: `¿Está seguro qué desea ${this.data ? 'actualizar' : 'crear'} este devocional?`,
        confirmAction: () => {
          if (this.handleSave) this.handleSave(this.formData);
        }
      });
    }
    else {
      await this.globalSer.presentAlert('¡Error!', validate || 'Disculpe, pero debe completar el formulario.');
    }
  }

  handleClickCancel() {
    if (this.handleCancel) this.handleCancel();
  }
}
