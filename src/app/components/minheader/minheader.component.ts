import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-minheader',
  templateUrl: './minheader.component.html',
  styleUrls: ['./minheader.component.scss'],
})
export class MinheaderComponent implements OnInit {
  history: string[] = [];
  @Input() title: string;
  titleHeader: string;
  show: boolean;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.titleHeader = this.title;
    this.show = true;
  }

  async back() {
    await this.navCtrl.back();
    this.show = false;
  }

}
