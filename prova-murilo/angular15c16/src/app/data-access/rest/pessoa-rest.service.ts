import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Pessoa} from './../domain/pessoa';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PessoaRestService {
  private _baseUrl = 'http://localhost:8080/api/pessoa';

  constructor(private _http: HttpClient) {}

  findAllPessoas(): Observable<Pessoa[]> {
    return this._http.get<Pessoa[]>(this._baseUrl);
  }

  save(pessoa: Pessoa): Observable<Pessoa> {
    return this._http.post<Pessoa>(this._baseUrl, pessoa);
  }
}
