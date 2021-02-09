import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinheaderComponent } from './minheader/minheader.component'

@NgModule({
  declarations: [
    MinheaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinheaderComponent
  ]
})
export class ComponentsModule { }
