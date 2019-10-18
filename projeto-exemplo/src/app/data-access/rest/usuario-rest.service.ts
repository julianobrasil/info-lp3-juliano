import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Usuario} from '../model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsuarioRestService {
  private readonly _baseUrl = 'http://localhost:8080';
  constructor(private _http: HttpClient) {}

  /**
   * Grava ou cria um usuário
   */
  gravaUsuario(usuario: Usuario): Observable<Usuario> {
    const url = this._baseUrl + '/api/usuario';

    if (usuario.id) {
      return this._http.put<Usuario>(url, usuario);
    } else {
      return this._http.post<Usuario>(url, usuario);
    }
  }

  /** Encontra todos os usuarios */
  findAllUsuarios(nome?: string): Observable<Usuario[]> {
    const url = this._baseUrl + '/api/usuario';

    const params: HttpParams = new HttpParams().set('nome', nome ? nome : '');

    return this._http.get<Usuario[]>(url, {params});
  }
}
