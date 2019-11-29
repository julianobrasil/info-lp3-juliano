import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Usuario} from '~data-access/domain/usuario';
import {UsuarioRestService} from '~data-access/rest/usuario-rest.service';

@Injectable({providedIn: 'root'})
export class UsuarioContainerComponentService {
  constructor(private _usuarioRest: UsuarioRestService) {}

  findAllUsuarios(): Observable<Usuario[]> {
    return this._usuarioRest.findAllUsuarios();
  }

  saveUsuario(usuario: Usuario): Observable<Usuario> {
    return this._usuarioRest.save(usuario);
  }

  removeUsuario(usuario: Usuario): Observable<boolean> {
    return this._usuarioRest.remover(usuario);
  }
}
