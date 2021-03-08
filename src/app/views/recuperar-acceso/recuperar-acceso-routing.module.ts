import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarAccesoPage } from './recuperar-acceso.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarAccesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarAccesoPageRoutingModule {}
