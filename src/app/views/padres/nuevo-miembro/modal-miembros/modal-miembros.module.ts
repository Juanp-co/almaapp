import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMiembrosPageRoutingModule } from './modal-miembros-routing.module';

import { ModalMiembrosPage } from './modal-miembros.page';
import {ComponentsModule} from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMiembrosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalMiembrosPage]
})
export class ModalMiembrosPageModule {}
