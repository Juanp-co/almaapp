import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenidoClasePageRoutingModule } from './contenido-clase-routing.module';

import { ContenidoClasePage } from './contenido-clase.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidoClasePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContenidoClasePage]
})
export class ContenidoClasePageModule {}
