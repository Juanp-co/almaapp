import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PadresService} from '../../padres.service';
import {GlobalService} from '../../../../services/global.service';

@Component({
  selector: 'app-modal-miembros',
  templateUrl: './modal-miembros.page.html',
  styleUrls: ['./modal-miembros.page.scss'],
})
export class ModalMiembrosPage implements OnInit {

  queryParams: any = {
    limit: 50,
    page: 1,
    word: null,
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
    private padresService: PadresService,
  ) { }

  ngOnInit() {
  }

  async getMembers() {
    if (this.init) this.init = false;
    this.searching = true;
    const data: any = await this.padresService.getMembers(this.queryParams);

    if (data && !data.error) this.members = data || [];
    else if (data && data.error) {
      await this.globalSer.errorSession();
      this.members = [];
    }
    else this.members = [];

    this.searching = false;
  }

  async closeModal(member = null) {
    await this.modalController.dismiss(member);
  }

  async selectMember(index) {
    const member = this.members[index] || null;

    if (member) await this.closeModal(member);
    else
      await this.globalSer.presentAlert('Alerta', 'Disculpe, pero ha ocurrido un error al momento de seleccionar al miembro.');
  }

  searchInput(value: any) {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(async () => {
      if (value.target.value) {
        this.queryParams.word = value.target.value.toString().trim();
        await this.getMembers();
      }
      else {
        this.queryParams.word = null;
        this.members = [];
      }
    }, 300);
  }

}
