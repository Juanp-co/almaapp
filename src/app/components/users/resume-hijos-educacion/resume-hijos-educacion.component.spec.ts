import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResumeHijosEducacionComponent } from './resume-hijos-educacion.component';

describe('ResumeHijosEducacionComponent', () => {
  let component: ResumeHijosEducacionComponent;
  let fixture: ComponentFixture<ResumeHijosEducacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeHijosEducacionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeHijosEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
