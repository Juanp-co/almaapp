import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVisitasPageRoutingModule } from './modal-visitas-routing.module';

import { ModalVisitasPage } from './modal-visitas.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVisitasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalVisitasPage]
})
export class ModalVisitasPageModule {}
