import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import {IEditar} from './editar/editar.model';
import {PerfilService} from './perfil.service';
import {ModalPasswordPage} from './modal-password/modal-password.page';
import {CookiesService} from '../../services/cookies.service';
import {GlobalService} from '../../services/global.service';
import {departments} from '../../../Utils/locations.data';
import {bloodType, civilStatus, companyType, gender, educationLevels, professions, rolesListSingleText} from '../../../Utils/profile.data';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userData: IEditar | null = null;
  views: any = {
    info: { show: true, title: 'Mis datos', data: null },
    courses: { show: false, title: 'Mis cursos', data: [] },
    group: { show: true, title: 'Núcleo familiar', data: null },
  };

  constructor(
    private globalSer: GlobalService,
    private perfilService: PerfilService,
    private cookieService: CookiesService,
    private router: Router
  ) {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/']);
  }

  async ngOnInit() { }

  async ionViewDidEnter() {
    // check if exist session
    if (!this.globalSer.checkSession()) this.router.navigate(['/']);
    else await this.getData();
  }

  async getData() {
    await this.globalSer.presentLoading('Cargando ...');
    const data = await this.perfilService.getProfileData();

    if (data && !data.error) {
      this.cookieService.setCookie('data', data);
      this.userData = data;
      this.views.group.data = await this.perfilService.getGroup();
      this.views.courses.data = await this.perfilService.getCourses();
      this.userData.birthday = this.userData.birthday ?
        dayjs(this.userData.birthday, 'YYYY-MM-DD', true).locale('es').format('DD [de] MMMM [de] YYYY')
        : null;
      this.userData.bloodType = bloodType[this.userData.bloodType] || null;
      this.userData.profession = professions[this.userData.profession] || null;
      this.userData.educationLevel = educationLevels[this.userData.educationLevel] || null;
      this.userData.companyType = companyType[this.userData.companyType] || null;
      this.userData.civilStatus = civilStatus[this.userData.civilStatus] || null;
      this.userData.gender = gender[this.userData.gender] || null;
      if (this.userData.department !== null) {
        const depto = departments[this.userData.department] || null;
        if (depto) {
          this.userData.department = depto.department;
          if (this.userData.city !== null) this.userData.city = depto.cities[this.userData.city] || null;
        }
      }
      this.views.info.data = this.userData;
      await this.globalSer.dismissLoading();
    }
    else if (data && data.error) {
      await this.globalSer.dismissLoading();
      await this.globalSer.errorSession();
    }
    else await this.globalSer.dismissLoading();
  }

  setShowView(input: string) {
    this.views[input].show = !this.views[input].show;
  }

  async goToEdit() {
    await this.router.navigate(['perfil/editar']);
  }

  setShowGroup(value = false) {
    this.views.group.show = value;
    this.views.courses.show = !value;
  }

  async openChangePasswordModal() {
    await this.globalSer.loadModal(ModalPasswordPage, {}, false);
  }

  getRoleValue(): string {
    const { roles } = this.userData || {};
    let ret = 'NO TIENE ASIGNADO NINGÚN ROL.';
    if (roles.length > 0) {
      ret = '';
      for (const v of roles) {
        if (ret === '') ret = rolesListSingleText[v];
        else ret += `, ${rolesListSingleText[v]}`;
      }
    }
    return ret;
  }

}
