import { TestBed } from '@angular/core/testing';

import { RecordatorioserviceService } from './recordatorioservice.service';

describe('RecordatorioserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordatorioserviceService = TestBed.get(RecordatorioserviceService);
    expect(service).toBeTruthy();
  });
});
