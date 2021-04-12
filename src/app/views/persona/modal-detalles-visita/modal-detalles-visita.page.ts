import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-detalles-visita',
  templateUrl: './modal-detalles-visita.page.html',
  styleUrls: ['./modal-detalles-visita.page.scss'],
})
export class ModalDetallesVisitaPage implements OnInit {

  @Input() data: any;

  constructor(
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    if (!this.data) await this.closeModal();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }


}
