import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikesModalPageRoutingModule } from './likes-modal-routing.module';

import { LikesModalPage } from './likes-modal.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikesModalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LikesModalPage]
})
export class LikesModalPageModule {}
