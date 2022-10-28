import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  },
  {
    path: 'editar',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'modal-password',
    loadChildren: () => import('./modal-password/modal-password.module').then( m => m.ModalPasswordPageModule)
  },  {
    path: 'eliminar',
    loadChildren: () => import('./eliminar/eliminar.module').then( m => m.EliminarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
