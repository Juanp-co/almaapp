import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalService} from '../modal.service';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-invitations-groups',
  templateUrl: './invitations-groups.page.html',
  styleUrls: ['./invitations-groups.page.scss'],
})
export class InvitationsGroupsPage implements OnInit {

  @Input() totals: any;
  invitations: any = [];
  pages = 0;
  queryParams: any = {
    limit: 10,
    page: 1,
  };

  constructor(
    private globalSer: GlobalService,
    private modalService: ModalService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.pages = this.globalSer.getPagination(this.totals || 0, this.queryParams.limit);
    this.getInvitations();
  }

  async getInvitations() {
    await this.globalSer.presentLoading();
    const data: any = await this.modalService.getInvitations();

    if (data && !data.error) {
      this.invitations = data;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async approveOrRejectInvitation(id, approve = true) {
    await this.globalSer.presentLoading();
    const data: any = approve ?
      await this.modalService.approveInvitations(id)
      : await this.modalService.rejectInvitations(id);

    if (data && !data.error) {
      this.invitations = this.invitations.filter(inv => inv._id !== id);
      this.totals = this.totals > 1 ? (this.totals - 1) : 0;
      await this.globalSer.presentAlert(
        '¡Éxito!',
        data.msg || `Se ha ${approve ? 'aceptado' : 'rechazado'} la invitación exitosamente.`
      );
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async loadData(event: any = null) {
    if (this.invitations?.length !== this.totals && this.queryParams.page < this.pages) {
      const newPage = this.queryParams.page + 1;
      if (newPage <= this.pages) {
        this.queryParams.page = newPage;
        await this.getInvitations();
        event.target.disabled = newPage === this.pages;
        event.target.complete();
      }
    }
    else {
      event.target.disabled = true;
      event.target.complete();
    }
  }

  async confirmAction(id, approve = false) {
    if (id) {
      let message = `¿Está seguro qué desea ${approve ? 'aceptar' : 'rechazar'} esta invitación?`;
      if (approve) message += '<br><br>NOTA: Su cuenta pasará a formar parte de este núcleo familiar.';

      await this.globalSer.alertConfirm({
        header: '¡Confirme!',
        message,
        confirmAction: () => this.approveOrRejectInvitation(id, approve)
      });
    }
  }

}
