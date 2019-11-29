import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import {UsuarioListComponentService} from './usuario-list-component.service';
import {Usuario} from '~data-access/domain/usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioListComponent {
  @Input()
  usuarios: Usuario[] = [];

  @Output()
  remove: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  @Output()
  edita: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  constructor(private _componentService: UsuarioListComponentService) {}

  _editaUsuario(usuario: Usuario) {
    this.edita.emit(usuario);
  }

  _removeUsuario(usuario: Usuario) {
    this.remove.emit(usuario);
  }
}
