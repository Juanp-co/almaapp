import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDetallesVisitaPage } from './modal-detalles-visita.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDetallesVisitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDetallesVisitaPageRoutingModule {}
