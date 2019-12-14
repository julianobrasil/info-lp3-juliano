import { TestBed } from '@angular/core/testing';

import { PessoaRestService } from './pessoa-rest.service';

describe('PessoaRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PessoaRestService = TestBed.get(PessoaRestService);
    expect(service).toBeTruthy();
  });
});
