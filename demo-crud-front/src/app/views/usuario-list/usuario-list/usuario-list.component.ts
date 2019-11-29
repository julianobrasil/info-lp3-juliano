import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {UsuarioListComponentService} from './usuario-list-component.service';
import {Usuario} from '~data-acess/domain/usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioListComponent {
  @Input()
  usuarios: Usuario[] = [];

  constructor(private _componentService: UsuarioListComponentService) {}
}
