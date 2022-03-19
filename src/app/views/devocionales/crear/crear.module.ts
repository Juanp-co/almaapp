import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPageRoutingModule } from './crear-routing.module';

import { CrearPage } from './crear.page';

import {ComponentsModule} from '../../../components/components.module';

import {CKEditorModule} from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPageRoutingModule,
    ComponentsModule,
    CKEditorModule,
  ],
  declarations: [CrearPage]
})
export class CrearPageModule {}
