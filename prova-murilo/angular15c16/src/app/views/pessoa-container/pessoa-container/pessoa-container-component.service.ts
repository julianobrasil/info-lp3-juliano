import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pessoa } from './../../../data-access/domain/pessoa';
import { PessoaRestService } from './../../../data-access/rest/pessoa-rest.service';

@Injectable({providedIn: 'root'})
export class PessoaContainerComponentService {
  constructor(private _pessoaRest: PessoaRestService) {}

  findAllPessoas(): Observable<Pessoa[]> {
    return this._pessoaRest.findAllPessoas();
  }

  savePessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this._pessoaRest.save(pessoa);
  }
}
