import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseVideoPageRoutingModule } from './clase-video-routing.module';

import { ClaseVideoPage } from './clase-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseVideoPageRoutingModule
  ],
  declarations: [ClaseVideoPage]
})
export class ClaseVideoPageModule {}
