import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';

import {UsuarioListMenuComponentService} from './usuario-list-menu-component.service';

@Component({
  selector: 'app-usuario-list-menu',
  templateUrl: './usuario-list-menu.component.html',
  styleUrls: ['./usuario-list-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuarioListMenuComponent {
  @Output()
  alterado: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  removido: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _componentService: UsuarioListMenuComponentService) {}
}
