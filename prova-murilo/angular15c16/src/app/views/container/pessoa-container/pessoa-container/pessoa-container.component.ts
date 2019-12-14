import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

import { PessoaContainerComponentService } from './pessoa-container-component.service';
import { Pessoa } from '~data-access/domain/pessoa';
import { PessoaComponentService } from '~views/pessoa/pessoa/pessoa-component.service';

@Component({
  selector: 'app-pessoa-container',
  templateUrl: './pessoa-container.component.html',
  styleUrls: ['./pessoa-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PessoaContainerComponent implements OnDestroy {
  _pessoas$: BehaviorSubject<Pessoa[]> = new BehaviorSubject<Pessoa[]>([]);

  /** Teardown observables subscriptions */
  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private _componentService: PessoaContainerComponentService,
    private _pessoaPresentational: PessoaComponentService,
  ) {
    this._componentService.findAllPessoas().subscribe((us: Pessoa[]) => {
      this._pessoas$.next(us);
    });
  }

  ngOnDestroy(): void {
    if (this._destroy$ && !this._destroy$.closed) {
      this._destroy$.next();
      this._destroy$.complete();
    }

    if (this._pessoas$ && !this._pessoas$.closed) {
      this._pessoas$.complete();
    }
  }

  _gravaPessoa(pes: Pessoa) {
    this._componentService
      .savePessoa({...pes})
      .pipe(withLatestFrom(this._pessoas$))
      .subscribe(([pessoa, pessoas]) => {
        const index = pessoas.findIndex((u: Pessoa) => u.id === pessoa.id);

        if (index < 0) {
          pessoas.push(pessoa);
        } else {
          pessoas.splice(index, 1, pessoa);
        }

        this._pessoas$.next([...pessoas]);

        this._pessoaPresentational.operacaoDeBancoFinalizada$.next();
      });
  }
}
