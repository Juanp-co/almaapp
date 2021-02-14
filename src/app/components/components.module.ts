import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinheaderComponent } from './minheader/minheader.component';
import { PersoncardComponent } from './personcard/personcard.component';
import { CoursecardComponent } from './coursecard/coursecard.component';
import { PersoncardtwoComponent } from './personcardtwo/personcardtwo.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [
    MinheaderComponent,
    PersoncardComponent,
    CoursecardComponent,
    PersoncardtwoComponent,
    VideoPlayerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinheaderComponent,
    PersoncardComponent,
    CoursecardComponent,
    PersoncardtwoComponent,
    VideoPlayerComponent,
  ]
})
export class ComponentsModule { }
