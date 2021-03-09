import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';

import { CoursecardComponent } from './coursecard/coursecard.component';
import { EventcardComponent } from './eventcard/eventcard.component';
import { MinheaderComponent } from './minheader/minheader.component';
import {PaginatorComponent} from './paginator/paginator.component';
import { PersoncardComponent } from './personcard/personcard.component';
import { PersoncardtwoComponent } from './personcardtwo/personcardtwo.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [
    CoursecardComponent,
    EventcardComponent,
    MinheaderComponent,
    PaginatorComponent,
    PersoncardComponent,
    PersoncardtwoComponent,
    VideoPlayerComponent,
  ],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [
    CoursecardComponent,
    EventcardComponent,
    MinheaderComponent,
    PaginatorComponent,
    PersoncardComponent,
    PersoncardtwoComponent,
    VideoPlayerComponent,
  ]
})
export class ComponentsModule { }
