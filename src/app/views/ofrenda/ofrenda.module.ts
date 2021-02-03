import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfrendaPageRoutingModule } from './ofrenda-routing.module';

import { OfrendaPage } from './ofrenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfrendaPageRoutingModule
  ],
  declarations: [OfrendaPage]
})
export class OfrendaPageModule {}
