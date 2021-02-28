import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalExamenTemaPage } from './modal-examen-tema.page';

const routes: Routes = [
  {
    path: '',
    component: ModalExamenTemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalExamenTemaPageRoutingModule {}
