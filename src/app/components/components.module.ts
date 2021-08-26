import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {ChartComponent} from './chart/chart.component';
import {CoursecardComponent} from './coursecard/coursecard.component';
import {EventcardComponent} from './events/eventcard/eventcard.component';
import {Eventcard2Component} from './events/eventcard2/eventcard2.component';
import {EventsFormComponent} from './events/events-form/events-form.component';
import {GrupoFamiliarCardComponent} from './grupo-familiar-card/grupo-familiar-card.component';
import {MapComponent} from './map/map.component';
import {MinheaderComponent} from './minheader/minheader.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {PersoncardComponent} from './personcard/personcard.component';
import {PersoncardtwoComponent} from './personcardtwo/personcardtwo.component';
import {ResumeHijosEducacionComponent} from './users/resume-hijos-educacion/resume-hijos-educacion.component';
import {ResumeProfileComponent} from './users/resume-profile/resume-profile.component';
import {VideoPlayerComponent} from './video-player/video-player.component';
import {VisitscardComponent} from './visitscard/visitscard.component';

@NgModule({
  declarations: [
    ChartComponent,
    CoursecardComponent,
    EventcardComponent,
    Eventcard2Component,
    EventsFormComponent,
    GrupoFamiliarCardComponent,
    MapComponent,
    MinheaderComponent,
    PaginatorComponent,
    PersoncardComponent,
    PersoncardtwoComponent,
    ResumeHijosEducacionComponent,
    ResumeProfileComponent,
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
    Eventcard2Component,
    EventsFormComponent,
    GrupoFamiliarCardComponent,
    MapComponent,
    MinheaderComponent,
    PaginatorComponent,
    PersoncardComponent,
    PersoncardtwoComponent,
    ResumeHijosEducacionComponent,
    ResumeProfileComponent,
    VideoPlayerComponent,
    VisitscardComponent,
  ]
})
export class ComponentsModule { }
