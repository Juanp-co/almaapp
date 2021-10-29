import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-visitas-pendientes',
  templateUrl: './visitas-pendientes.page.html',
  styleUrls: ['./visitas-pendientes.page.scss'],
})
export class VisitasPendientesPage implements OnInit {

  @Input() members: any[] = [];

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async selectAndCloseModal(id) {
    await this.modalController.dismiss(id);
  }

}
