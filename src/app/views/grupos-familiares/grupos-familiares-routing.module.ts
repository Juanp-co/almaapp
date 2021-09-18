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
  },
  {
    path: ':id',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruposFamiliaresPageRoutingModule {}
