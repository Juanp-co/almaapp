import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {IEscuela} from './escuela.model';
import {EscuelaService} from './escuela.service';
import {GlobalService} from '../../services/global.service';
import {setSaltLinesOrBr} from '../../../Utils/validations.functions';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.page.html',
  styleUrls: ['./escuela.page.scss'],
})
export class EscuelaPage implements OnInit {

  courses: IEscuela[] | null = null;
  queryParams: any = {
    input: 'level',
    value: 1,
    page: 1,
    limit: 100
  };
  showAllCourses = false;

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private escuelaServ: EscuelaService,
    private router: Router,
  ) {
  }

  async ngOnInit() {}

  async ionViewWillEnter() {
    if (!(await this.globalSer.checkSession()))
      this.router.navigate(['/']);
    else {
      this.showAllCourses = await this.globalSer.checkRoleToActions([0, 1]);
      this.getCoursesList();
    }
  }

  async getCoursesList() {
    const data: any = this.showAllCourses ?
      await this.escuelaServ.getCoursesAdmin(this.queryParams)
      : await this.escuelaServ.getCourses(this.queryParams);

    if (data && !data.error) {
      this.courses = data as IEscuela[];
      this.courses.forEach(c => {
        c.description = setSaltLinesOrBr(c.description, true);
        if (c.description.length > 50) {
          c.description = `${c.description.substr(0, 50)} ...`;
        }
      });
    }
    else if (data && data.error) {
      await this.globalSer.errorSession();
    }
  }

  // query actions
  async goToDetails(slug: string|null = null) {
    await this.router.navigate([`curso/${slug}`]);
  }

  async msgCantView() {
    await this.globalSer.presentAlert(
      'Alerta',
      'Disculpe, pero de debe completar los niveles anteriores para poder acceder este curso.'
    );
  }

}
