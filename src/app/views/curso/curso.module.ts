import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoPageRoutingModule } from './curso-routing.module';

import { CursoPage } from './curso.page';

import { ComponentsModule } from '../../components/components.module';
import { LikesModalPageModule } from '../modals/likes-modal/likes-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoPageRoutingModule,
    ComponentsModule,
    LikesModalPageModule
  ],
  declarations: [CursoPage]
})
export class CursoPageModule {}
