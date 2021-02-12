import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import dayjs from 'dayjs';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';
import {PerfilService} from './perfil.service';
import {IEditar} from './editar/editar.model';
import {departments} from '../../../Utils/locations.data';
import {bloodType, civilStatus, companyType, gender, educationLevels, professions} from '../../../Utils/profile.data';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userData: IEditar | null = null;
  groupData: any = null;
  coursesList: any = [];
  showGroup = true;

  constructor(
    private globalSer: GlobalService,
    private navCtrl: NavController,
    private perfilService: PerfilService,
    private cookieService: CookiesService,
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
        let depto: any = null;
        this.groupData = await this.perfilService.getGroup();
        this.coursesList = await this.perfilService.getCourses();
        this.userData.birthday = dayjs(this.userData.birthday).format('DD-MM-YYYY');
        this.userData.bloodType = bloodType[this.userData.bloodType] || null;
        this.userData.profession = professions[this.userData.profession] || null;
        this.userData.educationLevel = educationLevels[this.userData.educationLevel] || null;
        this.userData.companyType = companyType[this.userData.companyType] || null;
        this.userData.civilStatus = civilStatus[this.userData.civilStatus] || null;
        this.userData.gender = gender[this.userData.gender] || null;
        if (this.userData.department) {
          depto = departments[this.userData.department] || null;
          this.userData.department = depto ? depto.department : null;
        }
        if (this.userData.city) this.userData.city = depto ? depto.cities[this.userData.city] : null;
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
