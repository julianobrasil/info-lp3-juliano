import {ChangeDetectionStrategy, Component} from '@angular/core';

import {UsuarioComponentService} from './usuario-component.service';
import {FormControl, Validators} from '@angular/forms';
import {Subject, BehaviorSubject} from 'rxjs';
import {Usuario} from '~data-acess/domain/usuario';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioComponent {
  _usuarioCtrl: FormControl = new FormControl(null, Validators.required);

  _usuarios$: BehaviorSubject<Partial<Usuario>[]> = new BehaviorSubject<
    Partial<Usuario>[]
  >([]);

  constructor(private _componentService: UsuarioComponentService) {
    this._componentService
      .obtemTodosUsuarios$()
      .pipe(tap(_ => console.log({_})))
      .subscribe((users: Partial<Usuario>[]) => this._usuarios$.next(users));
  }

  _gravaUsuario() {
    if (this._usuarioCtrl.invalid) {
      alert('Usuário inválido');
      return;
    }
    this._componentService.gravaUsuario(this._usuarioCtrl.value);
  }
}
