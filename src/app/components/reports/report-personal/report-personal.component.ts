import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from '../../../services/global.service';
import {VisitasPendientesPage} from '../../../views/estadistica/visitas-pendientes/visitas-pendientes.page';

@Component({
  selector: 'app-report-personal',
  templateUrl: './report-personal.component.html',
  styleUrls: ['./report-personal.component.scss'],
})
export class ReportPersonalComponent implements OnInit {

  @Input() data: any = null;
  dataKeys = ['courses', 'visits', 'typeVisits', 'referrals'];

  constructor(
    private globalSer: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async showList() {
    const updateOnDismiss = (id) => {
      if (id) this.router.navigate([`persona/${id}`]);
    };
    await this.globalSer.loadModal(
      VisitasPendientesPage,
      {
        members: this.data?.visits?.membersPendingVisits || []
      },
      false,
      updateOnDismiss
    );
  }

  showListMembers = (): void => { this.showList() };

}
