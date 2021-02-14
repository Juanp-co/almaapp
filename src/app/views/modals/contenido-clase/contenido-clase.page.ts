import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ITemarioContent} from '../../curso/temario/temario.model';

@Component({
  selector: 'app-contenido-clase',
  templateUrl: './contenido-clase.page.html',
  styleUrls: ['./contenido-clase.page.scss'],
})
export class ContenidoClasePage implements OnInit {

  content: ITemarioContent | null = null;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.content = this.navParams.data.content as ITemarioContent;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
