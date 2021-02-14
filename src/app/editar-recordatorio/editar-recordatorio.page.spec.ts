import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarRecordatorioPage } from './editar-recordatorio.page';

describe('EditarRecordatorioPage', () => {
  let component: EditarRecordatorioPage;
  let fixture: ComponentFixture<EditarRecordatorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarRecordatorioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarRecordatorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
