import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalService} from '../modal.service';
import {GlobalService} from '../../../services/global.service';
import {checkTitlesOrDescriptions} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-nucleo-familia-form',
  templateUrl: './nucleo-familia-form.page.html',
  styleUrls: ['./nucleo-familia-form.page.scss'],
})
export class NucleoFamiliaFormPage implements OnInit {

  @Input() group: any;

  form = {
    _id: null,
    name: null,
    code: null,
  };

  constructor(
    private globalSer: GlobalService,
    private modalService: ModalService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    if (this.group) {
      this.form = {...this.form, ...this.group};
    }
  }

  async saveFamily(formData = {}) {
    await this.globalSer.presentLoading();
    const data: any = await this.modalService.saveGroup(formData);

    if (data && !data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha creado el núcleo familiar exitosamente.');
      this.closeModal(data.group);
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateFamily(formData: any = {}) {
    await this.globalSer.presentLoading();
    const data: any = await this.modalService.updateGroup(formData._id, formData);

    if (data && !data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha actualizado  el núcleo familiar exitosamente.');
      this.closeModal(data.group);
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async closeModal(data: any = null) {
    await this.modalController.dismiss(data);
  }

  validateForm(data: any = {}) {
    if (!checkTitlesOrDescriptions(data.name)) return 'Disculpe, pero debe indicar el título valido.';
    if (data.code && data.code?.length < 4) return 'Disculpe, pero debe indicar un código de al menos 4 caracteres.';
    return null;
  }


  setDataFormToSubmit() {
    return {
      _id: this.form._id || null,
      name: this.form.name?.trim().toUpperCase() || null,
      code: this.form.code?.trim().toUpperCase() || null,
    };
  }


  async confirmAction(update = false) {
    const dataToSend: any = this.setDataFormToSubmit();

    const validate = this.validateForm(dataToSend);

    if (!validate) {
      let message = '¿Está seguro qué desea __action__ núcleo familiar?';

      if (update) message = message.replace('__action__', 'actualizar su');
      else message = message.replace('__action__', 'crear el nuevo');

      await this.globalSer.alertConfirm({
        header: '¡Confirme!',
        message,
        confirmAction: () => {
          if (update) this.updateFamily(dataToSend);
          else this.saveFamily(dataToSend);
        }
      });
    }
    else {
      await this.globalSer.presentAlert('¡Error!', validate || 'Disculpe, pero debe completar el formulario.');
    }
  }

}
