import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./views/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'padres',
    loadChildren: () => import('./views/padres/padres.module').then( m => m.PadresPageModule)
  },
  {
    path: 'persona',
    children: [
      {
        path: ':personId',
        loadChildren: () => import('./views/persona/persona.module').then( m => m.PersonaPageModule)
      }
    ]
  },
  {
    path: 'curso',
    children: [
      {
        path: ':slug',
        loadChildren: () => import('./views/curso/curso.module').then( m => m.CursoPageModule)
      }
    ]
  },
  {
    path: 'escuela',
    loadChildren: () => import('./views/escuela/escuela.module').then( m => m.EscuelaPageModule)
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
  {
    path: 'perfil',
    loadChildren: () => import('./views/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'contenido-clase',
    loadChildren: () => import('./views/modals/contenido-clase/contenido-clase.module').then( m => m.ContenidoClasePageModule)
  },
  // {
  //   path: 'contenido-clase',
  //   loadChildren: () => import('./views/modal/contenido-clase/contenido-clase.module').then( m => m.ContenidoClasePageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
