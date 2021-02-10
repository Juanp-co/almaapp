import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPersonaPageRoutingModule } from './editar-persona-routing.module';

import { EditarPersonaPage } from './editar-persona.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPersonaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditarPersonaPage]
})
export class EditarPersonaPageModule {}
