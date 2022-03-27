import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitationsGroupsPage } from './invitations-groups.page';

const routes: Routes = [
  {
    path: '',
    component: InvitationsGroupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitationsGroupsPageRoutingModule {}
