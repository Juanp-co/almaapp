import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsolidadosPage } from './consolidados.page';

const routes: Routes = [
  {
    path: '',
    component: ConsolidadosPage
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsolidadosPageRoutingModule {}
