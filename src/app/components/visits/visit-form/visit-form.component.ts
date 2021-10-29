import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import dayjs from 'dayjs';
import {GlobalService} from '../../../services/global.service';
import {PersonaService} from '../../../views/persona/persona.service';
import {ModalMiembrosPage} from '../../../views/modals/modal-miembros/modal-miembros.page';
import {setSaltLinesOrBr} from '../../../../Utils/validations.functions';

@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrls: ['./visit-form.component.scss'],
})
export class VisitFormComponent implements OnInit {

  listActions: string[] = ['Visita', 'Llamada'];
  iAmVisitor = true;
  memberVisitor: any = null;
  member: any = null;
  maxInitDate: string = dayjs().format('YYYY-MM-DD');
  formData: any = {
    userId: null,
    visitor: null,
    observation: null,
    action: 0,
    date: null
  };

  constructor(
    private globalSer: GlobalService,
    private modalController: ModalController,
    private personaService: PersonaService,
  ) { }

  ngOnInit() {}

  async saveVisit() {
    await this.globalSer.presentLoading('Guardando, por favor espere...');
    const data: any = {...this.formData};
    data.userId = this.member._id;
    data.visitor = this.memberVisitor?._id || null;
    data.observation = setSaltLinesOrBr(data.observation, true);

    const created = await this.personaService.saveVisit(data);

    if (created && !created.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', created || 'Se ha registrado la visita exitosamente.');
      this.modalController.dismiss();
    }
    else if (created && created.error) {
      await this.globalSer.dismissLoading();
      this.modalController.dismiss();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async openMembersModal(input = 'visitor') {
    const updateOnDismiss = async (member) => {
      if (member) {
        if (input === 'member') this.member = member;
        else this.memberVisitor = member;
        // this.formData.visitor = member._id;
      }
    };
    await this.globalSer.loadModal(
      ModalMiembrosPage,
      {},
      false,
      updateOnDismiss
    );
  }

  setCheckedValue() {
    this.iAmVisitor = !this.iAmVisitor;
  }

  getMemberNames() {
    return this.member ?
      `${this.member.names} ${this.member.lastNames}`
      : null;
  }

  getMemberVisitorNames() {
    return this.memberVisitor ?
      `${this.memberVisitor.names} ${this.memberVisitor.lastNames}`
      : null;
  }

  setFormData(input: string, ev: any) {
    const { value } = ev.target || {};
    if (input === 'date') this.formData[input] = value ? `${value}`.substr(0, 10) : null;
    else this.formData[input] = ![null, undefined].includes(value) ? value : null;
  }

  validate() {
    const { action, date, observation } = this.formData;
    if (!this.member) return 'Disculpe, pero seleccionar al miembro que visitó.';
    if (!date) return 'Disculpe, pero debe indicar la fecha en la que se realizó la visita.';
    if (action === null) return 'Disculpe, pero debe seleccionar la acción realizada en la visita.';
    if (!observation || observation?.length < 5) return 'Disculpe, pero debe indicar una observación válida para la visita.';
    if (!this.iAmVisitor && !this.memberVisitor) return 'Disculpe, pero debe seleccionar al miembro que realizó la visita.';
    return null;
  }

  async confirmCancelForm() {
    await this.globalSer.alertConfirm({
      message: `¿Está seguro qué desea cancelar el registro de la visita?`,
      confirmAction: () => this.modalController.dismiss()
    });
  }

  async confirmSave() {
    const validated = this.validate();

    if (!validated) {
      await this.globalSer.alertConfirm({
        message: `¿Está seguro qué desea guardar la información suministrada de la visita?`,
        confirmAction: async () => { await this.saveVisit(); }
      });
    }
    else await this.globalSer.presentAlert('Alerta', validated);
  }

}
