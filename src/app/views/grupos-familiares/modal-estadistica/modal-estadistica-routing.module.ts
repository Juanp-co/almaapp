import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEstadisticaPage } from './modal-estadistica.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEstadisticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEstadisticaPageRoutingModule {}
