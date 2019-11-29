import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Usuario} from '~data-acess/domain/usuario';
import {UsuarioService} from '~data-acess/rest/usuario.service';

@Injectable({providedIn: 'root'})
export class UsuarioComponentService {
  constructor(private _usuarioRest: UsuarioService) {}

  gravaUsuario(value: any) {
    throw new Error('Method not implemented.');
  }

  obtemTodosUsuarios$(): Observable<Partial<Usuario>[]> {
    return this._usuarioRest.findAllUsers();
  }
}
