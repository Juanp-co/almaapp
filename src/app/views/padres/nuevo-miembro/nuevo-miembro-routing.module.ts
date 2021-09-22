import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoMiembroPage } from './nuevo-miembro.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoMiembroPage
  },
  {
    path: 'modal-miembros',
    loadChildren: () => import('../../modals/modal-miembros/modal-miembros.module').then(m => m.ModalMiembrosPageModule)
  },
  {
    path: 'modal-grupos-familiares',
    loadChildren: () => import('../../modals/modal-grupos-familiares/modal-grupos-familiares.module').then(m => m.ModalGruposFamiliaresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoMiembroPageRoutingModule {}
