import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import {PessoaListComponentService} from './pessoa-list-component.service';
import {Pessoa} from '~data-access/domain/pessoa';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PessoaListComponent {
  @Input()
  pessoas: Pessoa[] = [];

  @Output()
  remove: EventEmitter<Pessoa> = new EventEmitter<Pessoa>();

  @Output()
  edita: EventEmitter<Pessoa> = new EventEmitter<Pessoa>();

  constructor(private _componentService: PessoaListComponentService) {}

  _editaPessoa(pessoa: Pessoa) {
    this.edita.emit(pessoa);
  }

  _removePessoa(pessoa: Pessoa) {
    this.remove.emit(pessoa);
  }
}
