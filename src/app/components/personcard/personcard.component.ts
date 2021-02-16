import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-personcard',
  templateUrl: './personcard.component.html',
  styleUrls: ['./personcard.component.scss'],
})
export class PersoncardComponent implements OnInit {

  @Input() data: any;
  @Input() getGroup: any;
  member: any = null;
  group = false;
  showButton = false;

  constructor(
    private router: Router,
    private cookiesService: CookiesService,
  ) { }

  ngOnInit() {
    this.member = this.data;
    this.group = this.getGroup;
    if (this.member && this.member._id) {
      this.showButton = this.checkIdMember(this.member._id);
    }
  }

  checkIdMember(id: string): boolean {
    const dataLogin: any = this.cookiesService.getCookie('data');
    if (dataLogin) {
      return dataLogin._id !== id;
    }
    return false;
  }

  async goToDetails(path: string, id: string|null = null) {
    await this.router.navigate([`persona/${id}`], { queryParams: { group: this.group } });
  }

}
