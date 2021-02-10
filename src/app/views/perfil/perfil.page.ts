import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';
import {PerfilService} from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userData: any;
  groupData: any = null;
  coursesList: any = [];
  showGroup = true;

  constructor(
    public globalSer: GlobalService,
    public navCtrl: NavController,
    public perfilService: PerfilService,
    public cookieService: CookiesService,
    private router: Router
  ) { }

  async ngOnInit() { }

  async ionViewDidEnter() {
    await this.getData();
  }

  async getData() {
    const token = this.cookieService.getCookie('token');
    if (token) {
      this.userData = await this.perfilService.getProfileData();
      if (this.userData) {
        this.groupData = await this.perfilService.getGroup();
        this.coursesList = await this.perfilService.getCourses();
        await this.globalSer.dismissLoading();
      }
      else await this.errorSession();
    }
    else await this.errorSession();
  }

  async errorSession() {
    await this.globalSer.presentAlert('Alerta', 'Disculpe, pero no se encontró una sesión activa.');
    this.globalSer.clearAllData();
    await this.globalSer.dismissLoading();
    await this.navCtrl.navigateBack(['/']);
  }

  async goToEdit() {
    await this.router.navigate(['perfil/editar']);
  }

  async goToDetails(path: string, id: string) {
    // await this.router.navigate(['persona/editar']);
    console.log('path', path, id);
  }

  setShowReferrals(value: boolean) {
    this.showGroup = value;
  }

}
