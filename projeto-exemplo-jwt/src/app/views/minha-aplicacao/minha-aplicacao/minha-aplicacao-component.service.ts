import {Injectable} from '@angular/core';
import {UsuarioRestService} from 'src/app/data-access/rest/usuario-rest.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/data-access/model';

@Injectable({providedIn: 'root'})
export class MinhaAplicacaoComponentService {
  constructor(private _usuarioService: UsuarioRestService) {}

  getAllUsers$(): Observable<Usuario[]> {
    return this._usuarioService.findAllUsuarios();
  }
}
