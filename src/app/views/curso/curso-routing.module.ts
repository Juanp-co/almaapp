import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoPage } from './curso.page';

const routes: Routes = [
  {
    path: '',
    component: CursoPage
  },
  {
    path: 'modal-contenido-tema',
    loadChildren: () => import('./modal-contenido-tema/modal-contenido-tema.module').then( m => m.ModalContenidoTemaPageModule)
  },
  {
    path: 'modal-examen-tema',
    loadChildren: () => import('./modal-examen-tema/modal-examen-tema.module').then( m => m.ModalExamenTemaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoPageRoutingModule {}
