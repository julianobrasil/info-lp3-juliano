import {Injectable} from '@angular/core';
import {Usuario} from '~data-acess/domain/usuario';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  findAllUsers(): Observable<Partial<Usuario>[]> {
    return of([
      {
        id: '1',
        name: 'juliano',
        username: 'jpavel',
      },
    ]);
  }
}
