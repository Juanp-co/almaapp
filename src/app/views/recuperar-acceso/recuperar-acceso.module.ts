import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarAccesoPageRoutingModule } from './recuperar-acceso-routing.module';

import { RecuperarAccesoPage } from './recuperar-acceso.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarAccesoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecuperarAccesoPage]
})
export class RecuperarAccesoPageModule {}
