import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CumpleannosPage } from './cumpleannos.page';

const routes: Routes = [
  {
    path: '',
    component: CumpleannosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CumpleannosPageRoutingModule {}
