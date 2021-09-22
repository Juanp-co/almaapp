import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalGruposFamiliaresPageRoutingModule } from './modal-grupos-familiares-routing.module';

import { ModalGruposFamiliaresPage } from './modal-grupos-familiares.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalGruposFamiliaresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalGruposFamiliaresPage]
})
export class ModalGruposFamiliaresPageModule {}
