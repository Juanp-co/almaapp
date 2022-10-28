import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PerfilService} from '../perfil.service';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {
  formData: any = {
    password: ''
  };

  constructor(
    private globalSer: GlobalService,
    private perfilService: PerfilService,
    private router: Router,
  ) { }

  ngOnInit() {}

  async deleteAccount() {
    await this.globalSer.presentLoading('Procesando solicitud ...');
    const res = await this.perfilService.deleteAccount(this.formData);

    if (res && !res.error) {
      await this.globalSer.clearAllData();
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert(
        'Proceso completado',
        'Se han eliminado todos los datos de su cuenta exitosamente.'
      );
      await this.router.navigate(['/inicio']);
    }
    else if (res && res.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async confirmAction() {
    const { password } = this.formData;
    if (password?.length < 5) {
      await this.globalSer.presentAlert(
        'Contraseña inválida',
        'Disculpe, pero debe indicar una contraseña válida.'
      );
      return;
    }

    const message = '¿Está seguro qué desea eliminar todos los datos de su cuenta?' +
      '<br/><br/>NOTA: Una vez iniciado el proceso, no podrá revertirse.';

    await this.globalSer.alertConfirm({
      header: 'Eliminar cuenta',
      message,
      confirmAction: () => this.deleteAccount()
    });
  }
}
