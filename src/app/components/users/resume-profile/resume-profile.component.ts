import {Component, Input, OnInit} from '@angular/core';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import {IResumeProfileModel} from './resume-profile.model';
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

@Component({
  selector: 'app-resume-profile',
  templateUrl: './resume-profile.component.html',
  styleUrls: ['./resume-profile.component.scss'],
})
export class ResumeProfileComponent implements OnInit {

  @Input() member: any;
  @Input() picButtons = false;
  @Input() showDocument = false;
  @Input() handleDeletePic: () => void;
  @Input() handleChangePhoto: () => void;

  constructor() { }

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

}