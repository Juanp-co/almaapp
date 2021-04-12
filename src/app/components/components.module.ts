import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {ChartComponent} from './chart/chart.component';
import {CoursecardComponent} from './coursecard/coursecard.component';
import {EventcardComponent} from './eventcard/eventcard.component';
import {MinheaderComponent} from './minheader/minheader.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {PersoncardComponent} from './personcard/personcard.component';
import {PersoncardtwoComponent} from './personcardtwo/personcardtwo.component';
import {VideoPlayerComponent} from './video-player/video-player.component';
import {VisitscardComponent} from './visitscard/visitscard.component';

@NgModule({
  declarations: [
    ChartComponent,
    CoursecardComponent,
    EventcardComponent,
    MinheaderComponent,
    PaginatorComponent,
    PersoncardComponent,
    PersoncardtwoComponent,
    VideoPlayerComponent,
    VisitscardComponent,
  ],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [
    ChartComponent,
    CoursecardComponent,
    EventcardComponent,
    MinheaderComponent,
    PaginatorComponent,
    PersoncardComponent,
    PersoncardtwoComponent,
    VideoPlayerComponent,
    VisitscardComponent,
  ]
})
export class ComponentsModule { }
