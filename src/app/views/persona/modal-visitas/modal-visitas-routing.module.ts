import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVisitasPage } from './modal-visitas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVisitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVisitasPageRoutingModule {}
