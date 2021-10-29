import { Component, Input, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-minheader',
  templateUrl: './minheader.component.html',
  styleUrls: ['./minheader.component.scss'],
})
export class MinheaderComponent implements OnInit {
  history: string[] = [];
  @Input() title: string;
  @Input() slugValue: string;
  @Input() pathUrl: string;
  @Input() modal = false;
  titleHeader: string;
  style: any = {
    'background-image': `linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/cruz.png)`
  };
  logo = '/assets/logo.png';

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    private storageService: StorageService,
  ) { }

  async ngOnInit() {
    this.titleHeader = this.title;
    const params: any = await this.storageService.get('params-app');
    this.logo = `${params?.logo || '/assets/logo.png'}`;
  }

  async back() {
    if (this.slugValue) await this.storageService.remove(this.slugValue);
    if (this.pathUrl) await this.navCtrl.back();
    else await this.navCtrl.back();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
