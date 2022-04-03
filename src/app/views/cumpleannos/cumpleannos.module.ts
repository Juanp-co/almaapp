import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CumpleannosPageRoutingModule } from './cumpleannos-routing.module';

import { CumpleannosPage } from './cumpleannos.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CumpleannosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CumpleannosPage]
})
export class CumpleannosPageModule {}
