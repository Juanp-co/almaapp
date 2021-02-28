import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ICursoTemarioExtended} from '../course.model';

@Component({
  selector: 'app-modal-contenido-tema',
  templateUrl: './modal-contenido-tema.page.html',
  styleUrls: ['./modal-contenido-tema.page.scss'],
})
export class ModalContenidoTemaPage implements OnInit {

  @Input() content: ICursoTemarioExtended | null = null;

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
