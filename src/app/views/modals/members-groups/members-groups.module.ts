import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersGroupsPageRoutingModule } from './members-groups-routing.module';

import { MembersGroupsPage } from './members-groups.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersGroupsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MembersGroupsPage]
})
export class MembersGroupsPageModule {}
