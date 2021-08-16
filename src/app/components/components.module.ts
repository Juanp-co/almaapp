import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {ChartComponent} from './chart/chart.component';
import {CoursecardComponent} from './coursecard/coursecard.component';
import {EventcardComponent} from './events/eventcard/eventcard.component';
import {EventsFormComponent} from './events/events-form/events-form.component';
import {GrupoFamiliarCardComponent} from './grupo-familiar-card/grupo-familiar-card.component';
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
    EventsFormComponent,
    GrupoFamiliarCardComponent,
    MinheaderComponent,
    PaginatorComponent,
    PersoncardComponent,
    PersoncardtwoComponent,
    VideoPlayerComponent,
    VisitscardComponent,
  ],
  imports: [
    CommonModule, IonicModule, CKEditorModule
  ],
  exports: [
    ChartComponent,
    CoursecardComponent,
    EventcardComponent,
    EventsFormComponent,
    GrupoFamiliarCardComponent,
    MinheaderComponent,
    PaginatorComponent,
    PersoncardComponent,
    PersoncardtwoComponent,
    VideoPlayerComponent,
    VisitscardComponent,
  ]
})
export class ComponentsModule { }
