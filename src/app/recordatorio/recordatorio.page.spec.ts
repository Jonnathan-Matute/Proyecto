import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordatorioPage } from './recordatorio.page';

describe('RecordatorioPage', () => {
  let component: RecordatorioPage;
  let fixture: ComponentFixture<RecordatorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordatorioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordatorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
