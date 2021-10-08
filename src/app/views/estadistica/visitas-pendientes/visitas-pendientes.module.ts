import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitasPendientesPageRoutingModule } from './visitas-pendientes-routing.module';

import { VisitasPendientesPage } from './visitas-pendientes.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitasPendientesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VisitasPendientesPage]
})
export class VisitasPendientesPageModule {}
