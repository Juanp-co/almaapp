import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaseVideoPage } from './clase-video.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseVideoPageRoutingModule {}
