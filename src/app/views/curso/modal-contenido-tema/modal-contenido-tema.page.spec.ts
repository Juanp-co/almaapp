import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalContenidoTemaPage } from './modal-contenido-tema.page';

describe('ModalContenidoTemaPage', () => {
  let component: ModalContenidoTemaPage;
  let fixture: ComponentFixture<ModalContenidoTemaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContenidoTemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalContenidoTemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
