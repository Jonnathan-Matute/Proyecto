import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarRecordatoriosPage } from './listar-recordatorios.page';

describe('ListarRecordatoriosPage', () => {
  let component: ListarRecordatoriosPage;
  let fixture: ComponentFixture<ListarRecordatoriosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRecordatoriosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarRecordatoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
