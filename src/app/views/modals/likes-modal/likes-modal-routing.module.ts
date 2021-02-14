import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LikesModalPage } from './likes-modal.page';

const routes: Routes = [
  {
    path: '',
    component: LikesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikesModalPageRoutingModule {}
