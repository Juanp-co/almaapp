import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoMiembroPageRoutingModule } from './nuevo-miembro-routing.module';

import { NuevoMiembroPage } from './nuevo-miembro.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoMiembroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevoMiembroPage]
})
export class NuevoMiembroPageModule {}
