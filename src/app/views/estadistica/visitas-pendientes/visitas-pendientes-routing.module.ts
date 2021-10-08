import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitasPendientesPage } from './visitas-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: VisitasPendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitasPendientesPageRoutingModule {}
