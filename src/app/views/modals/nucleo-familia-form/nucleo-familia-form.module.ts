import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NucleoFamiliaFormPageRoutingModule } from './nucleo-familia-form-routing.module';

import { NucleoFamiliaFormPage } from './nucleo-familia-form.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NucleoFamiliaFormPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NucleoFamiliaFormPage]
})
export class NucleoFamiliaFormPageModule {}
