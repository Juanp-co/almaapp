import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-likes-modal',
  templateUrl: './likes-modal.page.html',
  styleUrls: ['./likes-modal.page.scss'],
})
export class LikesModalPage implements OnInit {

  titleModal: string;
  iconModal: string;
  personsList: any[] = [];
  optIcons = {
    likes: 'heart',
    unlikes: 'heart-dislike',
    comments: 'text',
  };

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.personsList = this.navParams.data.persons;
    this.titleModal = this.navParams.data.titleModal;
    this.iconModal = this.optIcons[this.navParams.data.iconModal];
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
