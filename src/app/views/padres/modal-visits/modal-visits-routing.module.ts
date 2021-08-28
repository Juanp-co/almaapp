import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVisitsPage } from './modal-visits.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVisitsPageRoutingModule {}
