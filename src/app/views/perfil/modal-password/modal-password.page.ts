import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PerfilService} from '../perfil.service';
import {GlobalService} from '../../../services/global.service';
import { checkPassword } from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-modal-password',
  templateUrl: './modal-password.page.html',
  styleUrls: ['./modal-password.page.scss'],
})
export class ModalPasswordPage implements OnInit {

  formData: any = {
    password: null,
    newPassword: null,
    repPassword: null
  };

  constructor(
    private globalSer: GlobalService,
    private modalController: ModalController,
    private perfilService: PerfilService,
  ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  validateData(): string|null {
    const { formData } = this;
    if (!formData.password) return 'Disculpe, pero debe indicar su contraseña actual.';
    if (formData.password && formData.password.length < 5) return 'Disculpe, pero debe puede que su contraseña actual no sea correcta.';
    if (!checkPassword(formData.newPassword)) return 'Disculpe, pero debe indicar una nueva contraseña válida.';
    if (formData.newPassword !== formData.repPassword) return 'Disculpe, pero las nuevas contraseñas no coinciden.';

    return null;
  }

  async updateData() {
    const validated = this.validateData();

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.presentLoading('Cambiando contraseña, por favor espere ...');
      const updated: any = await this.perfilService.changePassword(this.formData);

      if (updated && !updated.error) {
        this.formData.password = null;
        this.formData.newPassword = null;
        this.formData.repPassword = null;
        await this.globalSer.dismissLoading();
        await this.globalSer.presentAlert('¡Éxito!', updated || 'Se ha actualizado la contraseña exitosamente.');
        await this.closeModal();
      }
      else if (updated && updated.error) {
        await this.globalSer.dismissLoading();
        await this.globalSer.errorSession();
      }
      else await this.globalSer.dismissLoading();
    }
  }

  async confirmUpdate() {
    const validated = this.validateData();

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.alertConfirm({
        header: 'Cambiar contraseña',
        message: '¿Está seguro qué desea cambiar la contraseña de su cuenta?',
        confirmAction: () => this.updateData()
      });
    }
  }

}
