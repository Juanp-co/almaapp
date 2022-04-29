import {Component, Input, OnInit} from '@angular/core';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import {departments} from '../../../../Utils/locations.data';
import {
  bloodType,
  civilStatus,
  companyType,
  educationLevels,
  gender,
  professions,
  rolesListSingleText
} from '../../../../Utils/profile.data';
import {GlobalService} from '../../../services/global.service';

@Component({
  selector: 'app-resume-profile',
  templateUrl: './resume-profile.component.html',
  styleUrls: ['./resume-profile.component.scss'],
})
export class ResumeProfileComponent implements OnInit {

  @Input() member: any;
  @Input() picButtons = false;
  @Input() showDocument = false;
  @Input() showButtonCall = false;
  @Input() showBtnConsolidator = false;
  @Input() handleDeletePic: () => void;
  @Input() handleChangePhoto: () => void;
  @Input() handleConsolidator: () => void;

  constructor(private globalSer: GlobalService) {}

  ngOnInit() {
    if (this.member) {

      this.member.birthday = this.member.birthday ?
        dayjs(this.member.birthday, 'YYYY-MM-DD', true).locale('es').format('DD [de] MMMM [de] YYYY')
        : null;
      this.member.bloodType = bloodType[this.member.bloodType] || null;
      this.member.profession = professions[this.member.profession] || null;
      this.member.educationLevel = educationLevels[this.member.educationLevel] || null;
      this.member.companyType = companyType[this.member.companyType] || null;
      this.member.civilStatus = civilStatus[this.member.civilStatus] || null;
      this.member.gender = gender[this.member.gender] || null;
      if (this.member.created_at) {
        this.member.created_at = dayjs(this.member.created_at, 'YYYY-MM-DD HH:mm:ss', true)
          .locale('es')
          .format('dddd, DD [de] MMMM [de] YYYY');
      }
      if (this.member.department !== null) {
        const depto = departments[this.member.department] || null;
        if (depto) {
          this.member.department = depto.department;
          if (this.member.city !== null) this.member.city = depto.cities[this.member.city] || null;
        }
      }
    }
  }

  getRoleValue(): string {
    let ret = 'NO TIENE ASIGNADO NINGÚN ROL.';
    if (this.member) {
      const {roles} = this.member || {};
      if (roles?.length > 0) {
        ret = '';
        for (const v of roles) {
          if (ret === '') ret = rolesListSingleText[v];
          else ret += `, ${rolesListSingleText[v]}`;
        }
      }
    }
    return ret;
  }

  async confirmConsolidator() {
    await this.globalSer.alertConfirm({
      header: '¡Confirme!',
      message: `¿Está seguro qué desea ${this.member.consolidator ? 'quitar' : 'asignar'} a este miembro como consolidador a anónimo?`,
      confirmAction: () => this.handleConsolidator ? this.handleConsolidator() : null
    });
  }


  async callMember() {
    window?.open(`tel:${this.member.phone}`, '_system');
  }

}
