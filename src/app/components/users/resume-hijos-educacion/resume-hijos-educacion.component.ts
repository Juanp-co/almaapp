import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume-hijos-educacion',
  templateUrl: './resume-hijos-educacion.component.html',
  styleUrls: ['./resume-hijos-educacion.component.scss'],
})
export class ResumeHijosEducacionComponent implements OnInit {

  @Input() coursesData: any = null;
  @Input() groupData: any = null;
  @Input() referralsData: any = null;
  @Input() showGroup = false;
  showCourses = false;

  courses: any = {
    totals: 0,
    list: []
  };
  group: any = null;
  referrals: any = {
    totals: 0,
    data: null
  };
  constructor() { }

  ngOnInit() {
    if (this.showGroup) {
      if (this.groupData) this.group = this.groupData;
    }
    else if (this.referralsData) this.referrals = this.referralsData;
    if (this.coursesData) this.courses = this.coursesData;
  }

  setShowGroup() {
    this.showCourses = !this.showCourses;
  }

}
