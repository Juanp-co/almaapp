import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevocionalesPage } from './devocionales.page';

const routes: Routes = [
  {
    path: '',
    component: DevocionalesPage
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
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
