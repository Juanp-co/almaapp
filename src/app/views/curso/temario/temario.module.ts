import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemarioPageRoutingModule } from './temario-routing.module';

import { TemarioPage } from './temario.page';

import { ComponentsModule } from '../../../components/components.module';
import { LikesModalPageModule } from '../../modals/likes-modal/likes-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemarioPageRoutingModule,
    ComponentsModule,
    LikesModalPageModule,
  ],
  declarations: [TemarioPage]
})
export class TemarioPageModule {}
