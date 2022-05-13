import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {BarraSeccionComponent} from './organizacion/barra-seccion/barra-seccion.component';
import {ChartComponent} from './chart/chart.component';
import {CoursecardComponent} from './coursecard/coursecard.component';
import {DevocionalesCardComponent} from './devocionales/devocionales-card/devocionales-card.component';
import {DevocionalesCard2Component} from './devocionales/devocionales-card2/devocionales-card2.component';
import {DevocionalesFormComponent} from './devocionales/devocionales-form/devocionales-form.component';
import {DocumentosCardComponent} from './documentos/documentos-card/documentos-card.component';
import {ElemItemComponent} from './users/elem-item/elem-item.component';
import {EventcardComponent} from './events/eventcard/eventcard.component';
import {Eventcard2Component} from './events/eventcard2/eventcard2.component';
import {EventsFormComponent} from './events/events-form/events-form.component';
import {GrupoFamiliarCardComponent} from './grupos-familiares/grupo-familiar-card/grupo-familiar-card.component';
import {GroupItemListComponent} from './grupos-familiares/group-item-list/group-item-list.component';
import {GroupItemLocationComponent} from './grupos-familiares/group-item-location/group-item-location.component';
import {IglesiaCardComponent} from './organizacion/iglesia-card/iglesia-card.component';
import {MapComponent} from './map/map.component';
import {MinheaderComponent} from './minheader/minheader.component';
import {PaginatorComponent} from './paginator/paginator.component';
import {PersoncardComponent} from './personcard/personcard.component';
import {PersoncardtwoComponent} from './personcardtwo/personcardtwo.component';
import {ResumeHijosEducacionComponent} from './users/resume-hijos-educacion/resume-hijos-educacion.component';
import {ResumeProfileComponent} from './users/resume-profile/resume-profile.component';
import {VideoPlayerComponent} from './video-player/video-player.component';
import {VisitscardComponent} from './visits/visitscard/visitscard.component';
import {VisitFormComponent} from './visits/visit-form/visit-form.component';
import {ReportGeneralComponent} from './reports/report-general/report-general.component';
import {ReportPersonalComponent} from './reports/report-personal/report-personal.component';

@NgModule({
  declarations: [
    BarraSeccionComponent,
    ChartComponent,
    CoursecardComponent,
    DevocionalesCardComponent,
    DevocionalesCard2Component,
    DevocionalesFormComponent,
    DocumentosCardComponent,
    ElemItemComponent,
    EventcardComponent,
    Eventcard2Component,
    EventsFormComponent,
    GrupoFamiliarCardComponent,
    GroupItemListComponent,
    GroupItemLocationComponent,
    IglesiaCardComponent,
    MapComponent,
    MinheaderComponent,
    PaginatorComponent,
    PersoncardComponent,
    PersoncardtwoComponent,
    ReportGeneralComponent,
    ReportPersonalComponent,
    ResumeHijosEducacionComponent,
    ResumeProfileComponent,
    VideoPlayerComponent,
    VisitscardComponent,
    VisitFormComponent,
  ],
  imports: [
    CommonModule, IonicModule, CKEditorModule
  ],
  exports: [
    BarraSeccionComponent,
    ChartComponent,
    CoursecardComponent,
    DevocionalesCardComponent,
    DevocionalesCard2Component,
    DevocionalesFormComponent,
    DocumentosCardComponent,
    ElemItemComponent,
    EventcardComponent,
    Eventcard2Component,
    EventsFormComponent,
    GrupoFamiliarCardComponent,
    GroupItemListComponent,
    GroupItemLocationComponent,
    IglesiaCardComponent,
    MapComponent,
    MinheaderComponent,
    PaginatorComponent,
    PersoncardComponent,
    PersoncardtwoComponent,
    ReportGeneralComponent,
    ReportPersonalComponent,
    ResumeHijosEducacionComponent,
    ResumeProfileComponent,
    VideoPlayerComponent,
    VisitscardComponent,
    VisitFormComponent,
  ]
})
export class ComponentsModule { }
