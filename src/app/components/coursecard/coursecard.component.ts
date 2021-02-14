import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ICoursecard} from './coursecard.model';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.scss'],
})
export class CoursecardComponent implements OnInit {

  @Input() data: any;
  @Input() action: any;
  course: ICoursecard | null = null;
  link = '/';

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.data) {
      this.course = this.data;
      this.course.description = this.course.description ?
        `${this.course.description.substr(0, 100)} ...` :
        this.course.description;
    }
  }

}
