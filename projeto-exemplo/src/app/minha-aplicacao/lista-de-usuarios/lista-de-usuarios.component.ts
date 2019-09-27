import { Component, EventEmitter, Output, ChangeDetectionStrategy, Input } from '@angular/core';

import {Usuario} from '../../services/app.service';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaDeUsuariosComponent {
  @Input()
  users: Usuario[];

  @Output()
  idRemovido: EventEmitter<number> = new EventEmitter<number>();

  _apaga(u: Usuario) {
    this.idRemovido.emit(u.id);
  }
}
