import { TestBed } from '@angular/core/testing';

import { ListarDirectorioService } from './listar-directorio.service';

describe('ListarDirectorioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarDirectorioService = TestBed.get(ListarDirectorioService);
    expect(service).toBeTruthy();
  });
});
