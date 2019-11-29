import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Usuario} from '~data-access/domain/usuario';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioRestService {
  private _baseUrl = 'http://localhost:8080/api/usuario';

  constructor(private _http: HttpClient) {}

  findAllUsuarios(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(this._baseUrl);
  }

  save(usuario: Usuario): Observable<Usuario> {
    return this._http.post<Usuario>(this._baseUrl, usuario);
  }

  remover(usuario: Usuario): Observable<boolean> {
    return this._http.delete<boolean>(`${this._baseUrl}/${usuario.id}`);
  }
}
