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
    path: 'registro',
    loadChildren: () => import('./views/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar-acceso',
    loadChildren: () => import('./views/recuperar-acceso/recuperar-acceso.module').then( m => m.RecuperarAccesoPageModule)
  },
  {
    path: 'grupos-familiares',
    loadChildren: () => import('./views/grupos-familiares/grupos-familiares.module').then( m => m.GruposFamiliaresPageModule)
  },
  {
    path: 'acceder',
    loadChildren: () => import('./views/acceder/acceder.module').then( m => m.AccederPageModule)
  },
  {
    path: 'devocionales',
    loadChildren: () => import('./views/devocionales/devocionales.module').then( m => m.DevocionalesPageModule)
  },
  {
    path: 'organizacion',
    loadChildren: () => import('./views/organizacion/organizacion.module').then( m => m.OrganizacionPageModule)
  },
  {
    path: 'nucleo-familia-form',
    loadChildren: () => import('./views/modals/nucleo-familia-form/nucleo-familia-form.module').then( m => m.NucleoFamiliaFormPageModule)
  },
  {
    path: 'members-groups',
    loadChildren: () => import('./views/modals/members-groups/members-groups.module').then( m => m.MembersGroupsPageModule)
  },
  {
    path: 'invitations-groups',
    loadChildren: () => import('./views/modals/invitations-groups/invitations-groups.module').then( m => m.InvitationsGroupsPageModule)
  },
  {
    path: 'cumpleannos',
    loadChildren: () => import('./views/cumpleannos/cumpleannos.module').then( m => m.CumpleannosPageModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./views/documentos/documentos.module').then( m => m.DocumentosPageModule)
  },  {
    path: 'consolidados',
    loadChildren: () => import('./views/consolidados/consolidados.module').then( m => m.ConsolidadosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
