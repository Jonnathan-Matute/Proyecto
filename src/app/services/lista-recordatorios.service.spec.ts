import { TestBed } from '@angular/core/testing';

import { ListaRecordatoriosService } from './lista-recordatorios.service';

describe('ListaRecordatoriosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaRecordatoriosService = TestBed.get(ListaRecordatoriosService);
    expect(service).toBeTruthy();
  });
});
