import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruposFamiliaresPage } from './grupos-familiares.page';

const routes: Routes = [
  {
    path: '',
    component: GruposFamiliaresPage
  },
  {
    path: 'reportar',
    loadChildren: () => import('./reportar/reportar.module').then( m => m.ReportarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruposFamiliaresPageRoutingModule {}
