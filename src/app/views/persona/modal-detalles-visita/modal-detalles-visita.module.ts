import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDetallesVisitaPageRoutingModule } from './modal-detalles-visita-routing.module';

import { ModalDetallesVisitaPage } from './modal-detalles-visita.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDetallesVisitaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalDetallesVisitaPage]
})
export class ModalDetallesVisitaPageModule {}
