import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarDetalladaPage } from './listar-detallada.page';

describe('ListarDetalladaPage', () => {
  let component: ListarDetalladaPage;
  let fixture: ComponentFixture<ListarDetalladaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDetalladaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarDetalladaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
