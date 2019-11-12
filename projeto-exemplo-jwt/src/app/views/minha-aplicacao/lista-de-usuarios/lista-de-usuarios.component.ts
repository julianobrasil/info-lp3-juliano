import {Component, EventEmitter, Output, ChangeDetectionStrategy, Input} from '@angular/core';
import {Usuario} from 'src/app/data-access/model';

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
  idRemovido: EventEmitter<string> = new EventEmitter<string>();

  _apaga(u: Usuario) {
    this.idRemovido.emit(u.id);
  }
}
