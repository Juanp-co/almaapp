import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMiembrosPage } from './modal-miembros.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMiembrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMiembrosPageRoutingModule {}
