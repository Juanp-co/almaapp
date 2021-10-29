import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalPasswordPage} from './modal-password/modal-password.page';
import {IPerfl} from './perfil.model';
import {PerfilService} from './perfil.service';
import {DataService} from '../../services/data.service';
import {GlobalService} from '../../services/global.service';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userData: IPerfl | null = null;
  courses: any = {
    totals: 0,
    list: []
  };
  group: any = {
    totals: 0,
    data: null
  };
  formPic: any = {
    picture: null
  };
  showInfo = true;
  showEditPic = false;

  constructor(
    private dataService: DataService,
    private globalSer: GlobalService,
    private perfilService: PerfilService,
    private router: Router,
    private storageService: StorageService,
  ) {}

  async ngOnInit() {}

  async ionViewDidEnter() {
    // check if exist session
    if (!(await this.globalSer.checkSession())) this.router.navigate(['/']);
    else await this.getData();
  }

  async getData() {
    await this.globalSer.presentLoading('Cargando ...');
    this.userData = null;
    const data = await this.perfilService.getProfileData();

    if (data && !data.error) {
      await this.storageService.set('data', data);
      this.userData = data;
      this.group.data = await this.perfilService.getGroup() || null;
      this.group.totals = this.group.data?.members?.length || 0;
      this.courses.list = await this.perfilService.getCourses();
      this.courses.totals = this.courses.list?.length || 0;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updatePicture(remove = false) {
    await this.globalSer.presentLoading('Actualizando foto de perfil, por favor espere ...');
    const updated: any = await this.perfilService.updatePictureProfile({ ...this.formPic });

    if (updated && !updated.error) {
      const { data, msg } = updated;
      const infoUser = await this.storageService.get('data') || {};
      await this.storageService.set('data', {...infoUser, ...data});
      this.userData = {...this.userData, ...data};
      if (!remove) this.editPicEnable();
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', msg || 'Se ha actualizado la foto de perfil exitosamente.');
      this.updatePictureInGroup(data);
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setShowView() {
    this.showInfo = !this.showInfo;
  }

  async goToEdit() {
    await this.router.navigate(['perfil/editar']);
  }

  async openChangePasswordModal() {
    await this.globalSer.loadModal(ModalPasswordPage, {}, false);
  }

  updatePictureInGroup(data: any = null) {
    if (data) {
      if (this.group.data?.members?.length > 0) {
        const index = this.group.data?.members.findIndex(m => m._id === data._id);
        if (index > -1) {
          this.group.data.members[index].picture = data.picture;
        }
      }
    }
  }

  // picture actions
  editPicEnable() {
    this.formPic.picture = null;
    this.showEditPic = !this.showEditPic;
  }

  openFile(event) {
    const files = event.target.files;

    if (typeof files[0] !== 'object') return false;
    else {
      this.dataService.resizePhoto(files[0], 900, 'dataURL',  (resizedFile) => {
        this.formPic.picture = resizedFile;
      });
    }
  }

  validatePicture() {
    return !this.formPic.picture ?
      'Disculpe, pero debe seleccionar una imagen para el perfil.'
      : null;
  }

  async confirmUpdatePicture() {
    const validated = this.validatePicture();

    if (validated) await this.globalSer.presentAlert('Alerta', validated);
    else {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea cambiar la foto de su perfil?',
        confirmAction: () => this.updatePicture()
      });
    }
  }

  async confirmDeletePicture() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea eliminar su foto de perfil?',
      confirmAction: () => {
        this.formPic.picture = null;
        this.updatePicture(true);
      }
    });
  }

  removePhoto = (): void => { this.confirmDeletePicture(); };
  changePhoto = (): void => { this.editPicEnable(); };

}
