import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadresPageRoutingModule } from './padres-routing.module';

import { PadresPage } from './padres.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PadresPage]
})
export class PadresPageModule {}
