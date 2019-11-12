import {ChangeDetectionStrategy, Component} from '@angular/core';

import {MinhaAplicacaoComponentService} from './minha-aplicacao-component.service';
import {Observable} from 'rxjs';
import {Usuario} from 'src/app/data-access/model';

@Component({
  selector: 'app-minha-aplicacao',
  templateUrl: './minha-aplicacao.component.html',
  styleUrls: ['./minha-aplicacao.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinhaAplicacaoComponent {
  _usuarios$: Observable<Usuario[]> = this._componentService.getAllUsers$();

  constructor(private _componentService: MinhaAplicacaoComponentService) {
  }
}
