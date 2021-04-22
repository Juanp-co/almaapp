import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGruposFamiliaresPage } from './modal-grupos-familiares.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGruposFamiliaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGruposFamiliaresPageRoutingModule {}
