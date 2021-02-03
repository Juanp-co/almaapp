import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./views/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'padres',
    loadChildren: () => import('./views/padres/padres.module').then( m => m.PadresPageModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./views/persona/persona.module').then( m => m.PersonaPageModule)
  },
  {
    path: 'editar-persona',
    loadChildren: () => import('./views/editar-persona/editar-persona.module').then( m => m.EditarPersonaPageModule)
  },
  {
    path: 'escuela',
    loadChildren: () => import('./views/escuela/escuela.module').then( m => m.EscuelaPageModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./views/curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'clase-video',
    loadChildren: () => import('./views/clase-video/clase-video.module').then( m => m.ClaseVideoPageModule)
  },
  {
    path: 'clase',
    loadChildren: () => import('./views/clase/clase.module').then( m => m.ClasePageModule)
  },
  {
    path: 'examen',
    loadChildren: () => import('./views/examen/examen.module').then( m => m.ExamenPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./views/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'estadistica',
    loadChildren: () => import('./views/estadistica/estadistica.module').then( m => m.EstadisticaPageModule)
  },
  {
    path: 'ofrenda',
    loadChildren: () => import('./views/ofrenda/ofrenda.module').then( m => m.OfrendaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
