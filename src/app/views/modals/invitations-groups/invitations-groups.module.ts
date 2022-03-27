import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitationsGroupsPageRoutingModule } from './invitations-groups-routing.module';

import { InvitationsGroupsPage } from './invitations-groups.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitationsGroupsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InvitationsGroupsPage]
})
export class InvitationsGroupsPageModule {}
