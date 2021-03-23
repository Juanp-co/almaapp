import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfrendaPage } from './ofrenda.page';

const routes: Routes = [
  {
    path: '',
    component: OfrendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfrendaPageRoutingModule {}
