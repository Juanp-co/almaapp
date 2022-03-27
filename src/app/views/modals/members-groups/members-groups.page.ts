import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalService} from '../modal.service';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-members-groups',
  templateUrl: './members-groups.page.html',
  styleUrls: ['./members-groups.page.scss'],
})
export class MembersGroupsPage implements OnInit {

  @Input() groupId: any;
  @Input() ignoreIds: string[] = [];
  queryParams: any = {
    limit: 50,
    page: 1,
    search: null,
    ignoreIds: null,
    input: 'names',
    value: 1
  };
  members: any[] = [];
  searching = false;
  init = true;
  timer: any;

  constructor(
    private globalSer: GlobalService,
    private modalController: ModalController,
    private modalService: ModalService,
  ) { }

  ngOnInit() {
    if (this.ignoreIds) this.queryParams.ignoreIds = this.ignoreIds.toString();
  }

  async getMembers() {
    if (this.init) this.init = false;
    this.searching = true;
    const data: any = await this.modalService.getMembers(this.queryParams);

    if (data && !data.error) this.members = data || [];
    else if (data && data.error) {
      await this.globalSer.errorSession();
      this.members = [];
    }
    else this.members = [];

    this.searching = false;
  }

  async sendInvitationMembers(formData: any = {}) {
    const data: any = await this.modalService.addMemberFamilyGroup(this.groupId, formData);

    if (data && !data.error) {
      await this.globalSer.presentAlert('¡Éxito!', data.msg || 'Se ha actualizado  el núcleo familiar exitosamente.');
      this.closeModal();
    }
    else if (data && data.error) {
      await this.globalSer.errorSession();
      this.members = [];
    }
    else this.members = [];

    this.searching = false;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async selectMember(index) {
    const member = this.members[index] || null;

    if (member) {
      await this.globalSer.alertConfirm({
        header: '¡Confirme!',
        message: '¿Está seguro qué desea enviar una invitación a este miembro?',
        confirmAction: () => this.sendInvitationMembers({ members: [ member._id ] })
      });
    }
    else
      await this.globalSer.presentAlert(
        'Alerta',
        'Disculpe, pero ha ocurrido un error al momento de seleccionar al miembro.'
      );
  }

  searchInput(value: any) {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(async () => {
      if (value.target.value) {
        this.queryParams.search = value.target.value.toString().trim().toUpperCase();
        await this.getMembers();
      }
      else {
        this.queryParams.search = null;
        this.members = [];
      }
    }, 300);
  }

}
