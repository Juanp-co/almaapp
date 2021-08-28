import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PadresPage } from './padres.page';

const routes: Routes = [
  {
    path: '',
    component: PadresPage
  },
  {
    path: 'nuevo-miembro',
    loadChildren: () => import('./nuevo-miembro/nuevo-miembro.module').then( m => m.NuevoMiembroPageModule)
  },
  {
    path: 'modal-visits',
    loadChildren: () => import('./modal-visits/modal-visits.module').then( m => m.ModalVisitsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PadresPageRoutingModule {}
