import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import {PersonaService} from '../persona.service';
import {GlobalService} from '../../../services/global.service';
import {ModalDetallesVisitaPage} from '../modal-detalles-visita/modal-detalles-visita.page';
import {CookiesService} from '../../../services/cookies.service';

@Component({
  selector: 'app-modal-visitas',
  templateUrl: './modal-visitas.page.html',
  styleUrls: ['./modal-visitas.page.scss'],
})
export class ModalVisitasPage implements OnInit {

  @Input() data: any[];
  @Input() id: string|null;
  listActions: string[] = ['Visita', 'Llamada'];
  visits: any[] = [];
  showForm = false;
  minInitDate: string = dayjs('2021-01-01').format('YYYY-MM-DD');
  maxInitDate: string = dayjs().format('YYYY-MM-DD');
  formData: any = {
    userId: null,
    observation: null,
    action: '0',
    date: null
  };

  constructor(
    private cookiesService: CookiesService,
    private globalSer: GlobalService,
    private modalController: ModalController,
    private personaService: PersonaService,
  ) {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
  }

  async ngOnInit() {
    await this.setVisits();
  }

  async saveVisit() {
    await this.globalSer.presentLoading('Guardando, por favor espere...');
    const data: any = {...this.formData};
    data.date = dayjs(data.date).format('YYYY-MM-DD');
    data.userId = this.id || null;

    const created = await this.personaService.saveVisit(data);

    if (created && !created.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.presentAlert('¡Éxito!', created || 'Se ha registrado la visita exitosamente.');
      data.action = data.action === '1' ? 'Llamada' : 'Visita';
      this.data.unshift({
        consolidator: this.getMyDataToCard(),
        ...data
      });
      await this.setVisits();
      this.setShowForm();
    }
    else if (created && created.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  async setVisits() {
    this.visits = [];

    if (this.data && this.data.length > 0) {
      this.data.forEach(d => {
        this.visits.push({
          consolidator: d.consolidator,
          observation: d.observation && d.observation.length > 50 ? `${d.observation.substr(0, 50)} ...` : d.observation || 'No indicada.',
          date: d.date ? dayjs(d.date, 'YYYY-MM-DD', true).locale('es').format('dddd, DD [de] MMMM [de] YYYY') : 'No encontrada.',
        });
      });
    }
  }

  async showVisit(index: number) {
    await this.globalSer.presentLoading();
    const content: any = {
      data: {
        action: this.data[index].action || null,
        consolidator: this.data[index].consolidator || 'NO ENCONTRADO',
        observation: this.data[index].observation || 'No indicada.',
        date: this.data[index].date ? dayjs(this.data[index].date, 'YYYY-MM-DD', true).locale('es').format('dddd, DD [de] MMMM [de] YYYY') : 'No encontrada.',
      }
    };
    await this.globalSer.dismissLoading();
    await this.globalSer.loadModal(
      ModalDetallesVisitaPage,
      content,
      false,
    );
  }

  setShowForm() {
    if (this.showForm) {
      this.formData.date = null;
      this.formData.userId = null;
      this.formData.observation = null;
    }
    this.showForm = !this.showForm;
  }

  getMyDataToCard() {
    const data: any = this.cookiesService.getCookie('data');

    if (data) {
      return {
        _id: data._id,
        names: data.names,
        lastNames: data.lastNames,
        gender: data.gender,
        document: data.document
      };
    }
    return null;
  }

  async confirmCancelForm() {
    await this.globalSer.alertConfirm({
      message: `¿Está seguro qué desea cancelar el registro de la visita?`,
      confirmAction: () => { this.setShowForm(); }
    });
  }

  async confirmSave() {
    await this.globalSer.alertConfirm({
      message: `¿Está seguro qué desea guardar la información suministrada de la visita?`,
      confirmAction: async () => { await this.saveVisit(); }
    });
  }

}
