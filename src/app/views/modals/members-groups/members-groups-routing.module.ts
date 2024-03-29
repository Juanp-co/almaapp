import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersGroupsPage } from './members-groups.page';

const routes: Routes = [
  {
    path: '',
    component: MembersGroupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersGroupsPageRoutingModule {}
