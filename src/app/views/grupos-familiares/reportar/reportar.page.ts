import {Component, Input, OnInit} from '@angular/core';
import dayjs from 'dayjs';
import {ModalController} from '@ionic/angular';
import {
  checkDate,
  checkIfValueIsNumber,
  checkTitlesOrDescriptions, onlyNumbersInputValidation,
  onlyNumbersInputValidation2
} from '../../../../Utils/validations.functions';
import {GlobalService} from '../../../services/global.service';
import {GruposService} from '../grupos.service';
import {CookiesService} from '../../../services/cookies.service';

@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.page.html',
  styleUrls: ['./reportar.page.scss'],
})
export class ReportarPage implements OnInit {

  @Input() selected: any = null;
  @Input() groups: any[] = [];
  styleBg = 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/cruz.png")';
  id: any = null;
  // selected: any|null = null;
  formData: any = {
    brethren: null, // require
    friends: null, // require
    christianChildren: null, // require
    christianChildrenFriends: null, // require
    scheduledVisits: null,
    discipleshipVisits: null,
    offering: null,
    churchAttendance: null,
    churchAttendanceChildren: null,
    conversions: null,
    reconciliations: null,
    conversionsChildren: null,
    brethrenPlanning: null,
    bibleReading: null,
    consolidated: null,
    observations: null,
    date: null
  };
  minInitDate: string = dayjs('2020-01-01').format('YYYY-MM-DD');
  maxInitDate: string = dayjs().format('YYYY-MM-DD');
  logo = '/assets/logo.png';

  constructor(
    private cookiesService: CookiesService,
    private globalSer: GlobalService,
    private gruposService: GruposService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    const params: any = this.cookiesService.getCookie('params-app');
    this.logo = `${params?.logo || '/assets/logo.png'}`;
  }

  async saveReport() {
    await this.globalSer.presentLoading('Guardando, por favor espere...');
    const id = this.selected?._id || null;
    const data = await this.gruposService.addReport(id, this.formData);

    if (data) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', 'Se ha registrado la información del reporte exitosamente.');
      await this.closeModal();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.closeModal();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  validateOnlyNumber(event: any) {
    onlyNumbersInputValidation(event);
  }

  validateOnlyNumber2(event: any) {
    onlyNumbersInputValidation2(event);
  }

  // views
  getNumberGroup() {
    return this.selected ?
      `Sector: ${this.selected.sector} / Sub-sector: ${this.selected.subSector} Nº ${this.selected.number}`
      : null;
  }

  async showListGroups(id: string|null) {
    const inputs: any[] = [];
    for (const group of this.groups) {
      inputs.push( {
        name: `list-groups`,
        type: 'radio',
        label: `S: ${group.sector} / SS: ${group.subSector} Nº ${group.number}`,
        value: group._id,
        checked: group._id === id,
      });
    }

    await this.globalSer.alertWithList({
      header: 'Seleccione un grupo',
      inputs,
      confirmAction: async (value) => {
        if (value !== id) {
          const data = this.groups.find(g => g._id === value) || null;
          this.selected = data || null;
        }
      }
    });
  }

  validateData(): string|null {
    if (!this.selected) return 'Disculpe, pero debe seleccionar el grupo al que se le registrará el reporte.';

    const keys: any[] = [
      { key: 'brethren', label: 'hermanos' },
      { key: 'friends', label: 'amigos de los hermanos' },
      { key: 'christianChildren', label: 'niños cristianos' },
      { key: 'christianChildrenFriends', label: 'amigos de los niños cristianos' },
      { key: 'scheduledVisits', label: 'visitas programadas' },
      { key: 'discipleshipVisits', label: 'visitas a disipulado' },
      { key: 'offering', label: 'monto de las ofrendas' },
      { key: 'churchAttendance', label: 'asistencia de hermanos a la iglesia' },
      { key: 'churchAttendanceChildren', label: 'asistencia de niños a la iglesia' },
      { key: 'conversions', label: 'conversiones' },
      { key: 'conversionsChildren', label: 'conversiones de niños' },
      { key: 'reconciliations', label: 'reconciliaciones' },
      { key: 'brethrenPlanning', label: 'hermanos planeando' },
      { key: 'bibleReading', label: 'lecturas biblicas' },
      { key: 'consolidated', label: 'consolidados' },
    ];
    const required: string[] = [ 'brethren', 'friends', 'christianChildren', 'christianChildrenFriends' ];
    const { formData } = this;
    let msg: string|null = null;

    for (const [index, value] of keys.entries()) {
      if (required.includes(value.key)) {
        if (formData[value.key] === null || !checkIfValueIsNumber(`${formData[value.key]}`)) {
          msg = `Disculpe, pero debe indicar Nº de ${keys[index].label}.`;
          break;
        }
      }
      else if (formData[value.key] === null || !checkIfValueIsNumber(`${formData[value.key]}`)) {
        // msg = `Disculpe, pero debe indicar Nº de ${keys[index].label}.`;
        msg = `Disculpe, pero debe indicar Nº de ${keys[index].label}.`;
        break;
      }
    }
    if (!msg) {
      if (!checkTitlesOrDescriptions(`${formData.observations}`))
        msg = `Disculpe, pero debe indicar una observación para el reporte.`;
      else if (!checkDate(`${formData.date}`))
        msg = `Disculpe, pero debe indicar una fecha para el reporte.`;
    }

    return msg;
  }

  async confirmCancel() {
    await this.globalSer.alertConfirm({
      header: 'Confirme',
      message: '¿Está seguro qué desea cancelar el registro del reporte?',
      confirmAction: () => this.closeModal()
    });
  }

  async confirmAddReport() {
    const validated = this.validateData();

    if (!validated) {
      await this.globalSer.alertConfirm({
        header: 'Confirme',
        message: '¿Está seguro qué desea registrar estos datos para el reporte?<br><br>NOTA: Una vez guardado no podrá modificarlos.',
        confirmAction: () => this.saveReport()
      });
    }
    else {
      await this.globalSer.presentAlert('Alerta', validated || 'Disculpe, pero debe completar el formulario.');
    }
  }
}
