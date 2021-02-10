import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinheaderComponent } from './minheader/minheader.component';
import { PersoncardComponent } from './personcard/personcard.component';

@NgModule({
  declarations: [
    MinheaderComponent,
    PersoncardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinheaderComponent,
    PersoncardComponent
  ]
})
export class ComponentsModule { }
