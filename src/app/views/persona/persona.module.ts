import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaPageRoutingModule } from './persona-routing.module';

import { PersonaPage } from './persona.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PersonaPage]
})
export class PersonaPageModule {}
