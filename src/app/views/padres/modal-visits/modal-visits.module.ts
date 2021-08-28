import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVisitsPageRoutingModule } from './modal-visits-routing.module';

import { ModalVisitsPage } from './modal-visits.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVisitsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalVisitsPage]
})
export class ModalVisitsPageModule {}
