import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  titleHeader: string;
  show: boolean;

  constructor(
    private navCtrl: NavController,
    private cookiesService: CookiesService,
  ) { }

  ngOnInit() {
    this.titleHeader = this.title;
    this.show = true;
  }

  async back() {
    if (this.slugValue) this.cookiesService.removeCookie(this.slugValue);
    await this.navCtrl.back();
    this.show = false;
  }

}
