import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearRecordatorioPage } from './crear-recordatorio.page';

describe('CrearRecordatorioPage', () => {
  let component: CrearRecordatorioPage;
  let fixture: ComponentFixture<CrearRecordatorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRecordatorioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearRecordatorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
