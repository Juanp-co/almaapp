import { Component, Input, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-minheader',
  templateUrl: './minheader.component.html',
  styleUrls: ['./minheader.component.scss'],
})
export class MinheaderComponent implements OnInit {
  history: string[] = [];
  @Input() title: string;
  @Input() slugValue: string;
  @Input() modal = false;
  titleHeader: string;

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    private cookiesService: CookiesService,
  ) { }

  ngOnInit() {
    this.titleHeader = this.title;
  }

  async back() {
    if (this.slugValue) this.cookiesService.removeCookie(this.slugValue);
    await this.navCtrl.back();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
