import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevocionalesPage } from './devocionales.page';

const routes: Routes = [
  {
    path: '',
    component: DevocionalesPage
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
export class DevocionalesPageRoutingModule {}
