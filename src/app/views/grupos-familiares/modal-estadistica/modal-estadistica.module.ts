import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEstadisticaPageRoutingModule } from './modal-estadistica-routing.module';

import { ModalEstadisticaPage } from './modal-estadistica.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEstadisticaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalEstadisticaPage]
})
export class ModalEstadisticaPageModule {}
