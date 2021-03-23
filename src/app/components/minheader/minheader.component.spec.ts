import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinheaderComponent } from './minheader.component';

describe('MinheaderComponent', () => {
  let component: MinheaderComponent;
  let fixture: ComponentFixture<MinheaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MinheaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
