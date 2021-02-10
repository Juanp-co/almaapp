import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PersonaService } from './persona.service';
import { CookiesService } from '../../services/cookies.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {

  userData: any;
  groupData: any = null;
  coursesList: any = [];
  showReferrals = true;

  constructor(
    public globalSer: GlobalService,
    public navCtrl: NavController,
    public personaService: PersonaService,
    public cookieService: CookiesService,
    private router: Router
  ) { }

  async ngOnInit() {
    // await this.getData();
  }

  async ionViewDidEnter() {
    await this.getData();
  }

  async getData() {
    const token = this.cookieService.getCookie('token');
    if (token) {
      this.userData = await this.personaService.getProfileData();
      if (this.userData) {
        this.groupData = await this.personaService.getGroup();
        this.coursesList = await this.personaService.getCourses();
        await this.globalSer.dismissLoading();
      }
      else {
        await this.errorSession();
      }
    }
    else {
      await this.errorSession();
    }
  }

  async errorSession() {
    await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
    this.globalSer.clearAllData();
    await this.globalSer.dismissLoading();
    await this.navCtrl.navigateBack(['/']);
  }

  async goToEdit() {
    await this.router.navigate(['persona/editar']);
  }

  async goToDetails(path: string, id: string) {
    // await this.router.navigate(['persona/editar']);
    console.log('path', path, id);
  }

  setShowReferrals(value: boolean) {
    this.showReferrals = value;
  }

}
