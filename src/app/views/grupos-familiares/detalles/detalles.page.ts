import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GruposService} from '../grupos.service';
import {ReportarPage} from '../reportar/reportar.page';
import {ModalMiembrosPage} from '../../modals/modal-miembros/modal-miembros.page';
import {GlobalService} from '../../../services/global.service';
import {StorageService} from '../../../services/storage.service';
import {ModalEstadisticaPage} from '../modal-estadistica/modal-estadistica.page';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id: any = null;
  group: any = null;
  userData: any = null;
  showMap = false;
  adminRequest = false;
  showPrincipal = true;
  showButtonReport = false;
  showButtonRemove = false;
  principalRoles = [
    { input: 'leader', label: 'Líder' },
    { input: 'host', label: 'Anfitrión' },
    { input: 'master', label: 'Maestro' },
    { input: 'helper', label: 'Auxiliar' },
  ];
  dataToReport: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private globalSer: GlobalService,
    private gruposService: GruposService,
    private storageService: StorageService,
  ) { }

  async ngOnInit() {
  }

  async ionViewWillEnter() {
    this.id = await this.activateRoute.snapshot.paramMap.get('id');
    this.userData = await this.storageService.get('data');
    this.adminRequest = await this.globalSer.checkRoleToActions([0, 1, 2]);
    // validar role para saber si consultar al endpoint de grupos o al admin
    this.getData();
  }

  async getData() {
    await this.globalSer.presentLoading();
    const data: any = this.adminRequest ?
      await this.gruposService.getFamilyGroupAdminData(this.id)
      :
      await this.gruposService.getFamilyGroupData(this.id);

    if (data && !data.error) {
      this.group = data;
      this.dataToReport = { number: data.number, sector: data.sector, subSector: data.subSector, _id: data._id };
      this.group.location = [
        {
          type: 'Feature',
          geometry: data.location
        }
      ];
      this.showButtonReport = this.userData?._id === this.group?.members?.leader?._id;
      this.showButtonRemove = await this.globalSer.checkRoleToActions([0, 1, 2]) || this.showButtonReport;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async updateMembers(data: any = {}) {
    await this.globalSer.presentLoading('Actualizando, por favor espere ...');

    // get ids
    const members = {
      leaderId: data.leader?._id || null,
      helperId: data.helper?._id || null,
      hostId: data.host?._id || null,
      masterId: data.master?._id || null,
      assistantsIds: data.assistants?.map(a => a._id) || [],
    };

    const updated = await this.gruposService.updateMembersGroup(this.id, { members });

    if (updated && !updated.error) {
      this.group.members = {...updated};
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha actualizado la información exitosamente.');
    }
    else if (updated && updated.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setChangeList() {
    this.showPrincipal = !this.showPrincipal;
  }

  setShowMap() {
    this.showMap = !this.showMap;
  }

  async openModalReport() {
    const content: any = {
      selected: this.group,
      groups: [this.group]
    };
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      ReportarPage,
      content,
      false
    );
  }

  /*
    Reportes
   */
  async openReportModal() {
    if (this.showButtonReport) {
      await this.globalSer.presentLoading();

      await this.globalSer.dismissLoading();
      await this.globalSer.loadModal(
        ModalEstadisticaPage,
        { data: this.dataToReport },
        false
      );
    }
  }

  /*
    Members
   */
  async openMembersModal(typeMember: string) {
    await this.globalSer.presentLoading();
    const updateOnDismiss = async (member) => {
      if (member) {
        const data: any = this.group.members ? {...this.group.members} : null;
        if (data) {
          if (typeMember === 'assistants') data[typeMember].push(member);
          else data[typeMember] = member;
          this.updateMembers(data);
        }
      }
    };
    const { members } = this.group;
    let ignoreIds: string[] = [];

    if (members.leader) ignoreIds.push(members.leader._id);
    if (members.host) ignoreIds.push(members.host._id);
    if (members.helper) ignoreIds.push(members.helper._id);
    if (members.master) ignoreIds.push(members.master._id);
    if (members.assistants?.length > 0) ignoreIds = ignoreIds.concat(members.assistants?.map(m => m._id) || []);

    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      ModalMiembrosPage,
      { ignoreIds },
      false,
      updateOnDismiss
    );
  }

  removeMember(input: string, id: string|null = null) {
    if (id) {
      const confirm = () => {
        const data: any = this.group.members ? {...this.group.members} : null;
        if (data) {
          if (input === 'assistants') data.assistants = data?.assistants?.filter(a => a._id !== id) || [];
          else data[input] = null;
          this.updateMembers(data);
        }
      };

      this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea quitar a este miembro del grupo?',
        confirmAction: () => confirm()
      });
    }
    else {
      this.globalSer.presentAlert(
        '¡Alerta!',
        'Disculpe, pero ha ocurrido un error al momento de obtener el miembro a eliminar.'
      );
    }
  }

}
