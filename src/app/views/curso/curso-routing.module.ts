import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoPage } from './curso.page';

const routes: Routes = [
  {
    path: '',
    component: CursoPage
  },
  {
    path: 'temario',
    children: [
      {
        path: ':themeId',
        loadChildren: () => import('./temario/temario.module').then( m => m.TemarioPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoPageRoutingModule {}
