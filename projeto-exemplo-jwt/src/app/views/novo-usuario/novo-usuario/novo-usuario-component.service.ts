import {Injectable} from '@angular/core';
import {UsuarioRestService} from 'src/app/data-access/rest/usuario-rest.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/data-access/model';

@Injectable({providedIn: 'root'})
export class NovoUsuarioComponentService {
  constructor(private _usuarioRestService: UsuarioRestService) {}

  gravaUsuario(obj: {nome: string; senha: string; email: string}): Observable<Usuario> {
    return this._usuarioRestService.gravaUsuario({...obj});
  }
}
