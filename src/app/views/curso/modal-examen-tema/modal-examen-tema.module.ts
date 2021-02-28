import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalExamenTemaPageRoutingModule } from './modal-examen-tema-routing.module';

import { ModalExamenTemaPage } from './modal-examen-tema.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalExamenTemaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ModalExamenTemaPage]
})
export class ModalExamenTemaPageModule {}
