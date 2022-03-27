import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-personcard',
  templateUrl: './personcard.component.html',
  styleUrls: ['./personcard.component.scss'],
})
export class PersoncardComponent implements OnInit {

  @Input() data: any;
  @Input() getGroup: any;
  @Input() disabledClick = false;
  @Input() removeButton = false;
  @Input() handleRemoveMembersFamily: (id) => void;
  member: any = null;
  group = false;
  showButton = false;

  constructor(
    private router: Router,
    private storageService: StorageService,
  ) { }

  async ngOnInit() {
    this.member = this.data;
    this.group = this.getGroup;
    if (this.disabledClick) this.showButton = false;
    else if (this.member && this.member._id) {
      this.showButton = await this.checkIdMember(this.member._id);
    }
  }

  async checkIdMember(id: string) {
    const dataLogin: any = await this.storageService.get('data');
    return dataLogin?._id !== id;
  }

  handleRemove(id: string|null = null) {
    if (this.removeButton && id) this.handleRemoveMembersFamily(id);
  }

  async goToDetails(id: string|null = null) {
    await this.router.navigate([`persona/${id}`], { queryParams: { group: this.group } });
  }

}
