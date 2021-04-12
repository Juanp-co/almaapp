import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaPage } from './persona.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaPage
  },
  {
    path: 'modal-visitas',
    loadChildren: () => import('./modal-visitas/modal-visitas.module').then( m => m.ModalVisitasPageModule)
  },
  {
    path: 'modal-detalles-visita',
    loadChildren: () => import('./modal-detalles-visita/modal-detalles-visita.module').then( m => m.ModalDetallesVisitaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaPageRoutingModule {}
