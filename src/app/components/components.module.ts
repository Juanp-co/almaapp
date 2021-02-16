import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinheaderComponent } from './minheader/minheader.component';
import { PersoncardComponent } from './personcard/personcard.component';
import { CoursecardComponent } from './coursecard/coursecard.component';
import { PersoncardtwoComponent } from './personcardtwo/personcardtwo.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { EventcardComponent } from './eventcard/eventcard.component';

@NgModule({
  declarations: [
    MinheaderComponent,
    PersoncardComponent,
    CoursecardComponent,
    PersoncardtwoComponent,
    VideoPlayerComponent,
    EventcardComponent,
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
    EventcardComponent,
  ]
})
export class ComponentsModule { }
