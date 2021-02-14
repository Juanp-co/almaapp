import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {IEscuela} from './escuela.model';
import {EscuelaService} from './escuela.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.page.html',
  styleUrls: ['./escuela.page.scss'],
})
export class EscuelaPage implements OnInit {

  courses: IEscuela[] = [];

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private escuelaServ: EscuelaService,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.globalSer.presentLoading();
    const data: any = await this.escuelaServ.getCourses();

    if (data && !data.error) this.courses = data as IEscuela[];
    else if (data && data.error) await this.globalSer.errorSession();
    else await this.globalSer.dismissLoading();
  }

  async goToDetails(slug: string|null = null) {
    await this.router.navigate([`curso/${slug}`]);
  }

}
