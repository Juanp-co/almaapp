import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalPasswordPage} from './modal-password/modal-password.page';
import {IPerfl} from './perfil.model';
import {PerfilService} from './perfil.service';
import {DataService} from '../../services/data.service';
import {GlobalService} from '../../services/global.service';
import {StorageService} from '../../services/storage.service';
import {NucleoFamiliaFormPage} from '../modals/nucleo-familia-form/nucleo-familia-form.page';
import {MembersGroupsPage} from '../modals/members-groups/members-groups.page';
import {InvitationsGroupsPage} from '../modals/invitations-groups/invitations-groups.page';

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
  totalsInvitations = 0;
  churches: any[] = [];
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
    this.churches = await this.storageService.get('churches');
    const data = await this.perfilService.getProfileData();

    if (data && !data.error) {
      await this.storageService.set('data', data);
      this.userData = data;
      this.group.data = await this.perfilService.getGroup() || null;
      this.group.totals = this.group.data?.members?.length || 0;
      this.courses.list = await this.perfilService.getCourses();
      this.totalsInvitations = await this.perfilService.getTotalsInvitations();
      this.courses.totals = this.courses.list?.length || 0;
      const church = this.churches.find(c => c._id === this.userData.church);
      this.userData.church = church?.name || null;
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

  async removeMemberFamilyGroup(data: any = {}) {
    await this.globalSer.presentLoading('Quitando miembro del núcleo familiar. Por favor, espere...');
    const updated: any = await this.perfilService.removeMemberFamilyGroup(this.group?.data?._id, data);

    if (updated && !updated.error) {
      this.group.data.members = this.group.data.members.filter(m => m._id !== data.members[0]);
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', updated.msg || 'Se ha actualizado el listado de miembros exitosamente.');
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

  async goToDelete() {
    await this.router.navigate(['perfil/eliminar']);
  }

  async showCreateFamilyModal() {
    const content: any = {
      group: this.group.data
    };
    const updateOnDismiss = async (data) => {
      if (data) {
        if (!this.group.data) {
          data.members = [
            {
              _id: this.userData._id,
              names: this.userData.names,
              lastNames: this.userData.lastNames,
              document: this.userData.document,
              gender: this.userData.gender,
              phone: this.userData.phone,
              picture: this.userData.picture,
              position: this.userData.position,
            }
          ]
        }
        this.group.data = { ...this.group.data, ...data };
      }
    };
    await this.globalSer.loadModal(
      NucleoFamiliaFormPage,
      content,
      false,
      updateOnDismiss
    );
  }

  async openMembersModal() {
    await this.globalSer.loadModal(
      MembersGroupsPage,
      {
        ignoreIds: this.group?.data?.members?.map(m => m._id) || [],
        groupId: this.group?.data?._id || null,
      },
      false
    );
  }

  async openInvitationsModal() {
    const refreshGroup = async () => {
      this.totalsInvitations = await this.perfilService.getTotalsInvitations();
      this.group.data = await this.perfilService.getGroup() || null;
      this.group.totals = this.group.data?.members?.length || 0;
    };
    await this.globalSer.loadModal(
      InvitationsGroupsPage,
      {
        totals: this.totalsInvitations
      },
      false,
      refreshGroup
    );
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

  async confirmRemoveMemberGroup(id: string|null = null) {
    if (id) {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea quitar a este miembro de su núcleo familiar?',
        confirmAction: () => this.removeMemberFamilyGroup({ members: [id] })
      });
    }
  }

  removePhoto = (): void => { this.confirmDeletePicture(); };
  changePhoto = (): void => { this.editPicEnable(); };
  createFamily = (): void => { this.showCreateFamilyModal(); };
  addMembersFamily = (): void => { this.openMembersModal(); };
  removeMembersFamily = (id): void => { this.confirmRemoveMemberGroup(id); };

}
