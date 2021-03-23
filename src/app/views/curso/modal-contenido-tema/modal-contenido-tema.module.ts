import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalContenidoTemaPageRoutingModule } from './modal-contenido-tema-routing.module';

import { ModalContenidoTemaPage } from './modal-contenido-tema.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalContenidoTemaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ModalContenidoTemaPage]
})
export class ModalContenidoTemaPageModule {}
